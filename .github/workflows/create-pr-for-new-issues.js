/**
 * @param {TemplateData} templateData
 */
function getNewObjectFromTemplateData(templateData) {
  const parents = templateData.public_organisms
    .split('\n')
    .map((org) => org.trim())
    .filter((org) => org.length > 0)

  const docs = templateData.published_reports
    .split('\n')
    .map((reportString) => reportString.trim())
    .filter((reportString) => reportString.length > 0)
    .map((reportString) => {
      // Podríamos mejorar esto para automáticamente detectar urls y nombres juntos

      if (isValidUrl(reportString)) {
        return {
          url: reportString,
        }
      }

      return {
        name: reportString,
      }
    })

  // TODO: Deberíamos usar composing_organisms mejor, pero no encontré un ejemplo de dónde ponerlo
  const descRaw =
    templateData.description +
    (templateData.composing_organisms === ''
      ? ''
      : `\n\n${templateData.composing_organisms}`)

  return {
    name: templateData.name,
    type: templateData.type === 'None' ? undefined : templateData.type,
    website: templateData.website === '' ? undefined : templateData.website,
    email: templateData.email === '' ? undefined : templateData.email,
    description: descRaw === '' ? undefined : descRaw,
    scope:
      templateData.territorial_scope === 'None'
        ? undefined
        : templateData.territorial_scope,
    from_date:
      templateData.from_date === '' ? undefined : templateData.from_date,
    to_date: templateData.to_date === '' ? undefined : templateData.to_date,
    parents: parents.length > 0 ? parents : undefined,
    docs: docs.length > 0 ? docs : undefined,
    is_active: templateData.is_active === 'None' ? undefined : 'Si',
  }
}

/** @typedef {{
 name: string
 website: string
 email: string
 public_organisms: string
 territorial_scope: string
 type: string
 published_reports: string
 composing_organisms: string
 description: string
 from_date: string
 to_date: string
 is_active: string
 }} TemplateData */

/** @param {import('@types/github-script').AsyncFunctionArguments & {github: {rest: RestEndpointMethods}}} ctx */
export default async (ctx) => {
  ctx.core.debug('Recopilando informacion sobre la issue...')

  /** @var {TemplateData} */
  const templateData = JSON.parse(process.env.ISSUE_TEMPLATE_DATA_JSON_STRING)
  if (templateData.name === undefined || templateData.name === '') {
    ctx.core.debug(
      'No cumple la template observatory_add, por lo que ignoramos esta issue'
    )
    return
  }

  const branchName = `nuevo-observatorio-${ctx.context.issue.number}`

  ctx.core.debug('Creando branch con nuevo contenido...')
  await createBranchWithNewFileContent()

  ctx.core.debug('Creando PR...')
  const result = await ctx.github.rest.pulls.create({
    title: `Añadir observatorio: ${templateData.name} (#${ctx.context.issue.number})`,
    owner: ctx.context.repo.owner,
    repo: ctx.context.repo.repo,
    head: branchName,
    base: 'main',
    body: [
      `Resolves #${ctx.context.issue.number}`,
      'Este PR ha sido auto-generado basado en una Issue que usa la template para añadir observatorios',
    ].join('\n'),
  })
  await ctx.github.rest.issues.addLabels({
    owner: ctx.context.repo.owner,
    repo: ctx.context.repo.repo,
    issue_number: result.data.number,
    labels: ['bot'],
  })

  ctx.core.debug('Finalizado correctamente!')

  async function createBranchWithNewFileContent() {
    const filePath = 'httpdocs/observatories.json'

    const currentContent = await ctx.github.rest.repos.getContent({
      owner: ctx.context.repo.owner,
      repo: ctx.context.repo.repo,
      path: filePath,
    })

    const obj = JSON.parse(
      Buffer.from(currentContent.data.content, 'base64').toString('utf-8')
    )

    obj.push(getNewObjectFromTemplateData(templateData))

    const newContent = JSON.stringify(obj, null, 2)

    const mainBranchRef = await ctx.github.rest.git.getRef({
      owner: ctx.context.repo.owner,
      repo: ctx.context.repo.repo,
      ref: `heads/main`,
    })
    await ctx.github.rest.git.createRef({
      owner: ctx.context.repo.owner,
      repo: ctx.context.repo.repo,
      ref: `refs/heads/${branchName}`,
      sha: mainBranchRef.data.object.sha,
    })

    await ctx.github.rest.repos.createOrUpdateFileContents({
      owner: ctx.context.repo.owner,
      repo: ctx.context.repo.repo,
      path: filePath,
      message: `Añadir observatorio: ${templateData.name}`,
      committer: {
        name: 'Bot Nuevos Observatorios',
        email: 'octocat@github.com',
      },
      branch: branchName,
      sha: currentContent.data.sha,
      content: Buffer.from(newContent, 'utf-8').toString('base64'),
    })
  }
}

function isValidUrl(urlString) {
  try {
    return Boolean(new URL(urlString))
  } catch (e) {}
  return false
}
