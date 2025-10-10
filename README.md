# observatoriospublicos.es

[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)
<span class="badge-patreon"><a href="https://patreon.com/jaime_gomez_obregon" title="Apoya este proyecto en Patreon"><img src="https://img.shields.io/badge/patreon-donate-yellow.svg" alt="Botón para donar en Patreon" /></a></span>

En [observatoriospublicos.es](https://observatoriospublicos.es) estamos catalogando todos los observatorios públicos y público-privados del país. Y también los [«espacios de observación»](https://x.com/JaimeObregon/status/1971539366876184991), claro…

## Saludo del Presidente

¿Cuántos observatorios públicos hay en España?

Nadie lo sabe a ciencia cierta, pero en 2024 la ministra de Sanidad de España [anunció](https://twitter.com/Monica_Garcia_G/status/1768227454223565199) la creación de otro más: el <cite>Observatorio contra el Fraude y la Corrupción Sanitaria</cite>. Como nadie parece estar controlando este sindiós, ese mismo día yo, Jaime Gómez-Obregón, [solemnemente anuncié](https://twitter.com/JaimeObregon/status/1768560520183816530) la creación de un observatorio para observarlos a todos: ¡sé bienvenido, oh, al <strong>Observatorio de los Observatorios Públicos de España</strong>! 🙃

## Cómo proponer nuevos observatorios

Antes de proponer un nuevo observatorio, comprueba por favor que:

1. **No está catalogado ya**. Utiliza para ello el buscador en [observatoriospublicos.es](https://observatoriospublicos.es/).
2. **Es un observatorio con financiación pública o público-privada**, pues no observamos iniciativas exclusivamente privadas. Tampoco es requisito que el observatorio en cuestión tenga una presupuesto nominativo asignado. Basta que tenga origen o apoyo de una entidad pública, aunque sea parcial.
3. **Tiene que ser un observatorio** y referirse a sí mismo como «observatorio» o «espacio de observación».

Si has atisbado un candidato que satisface estos requisitos, por favor envíanoslo [abriendo un _issue_ en GitHub](https://github.com/JaimeObregon/observatoriospublicos.es/issues/new/choose). Así también puedes proponer cambios en observatorios existentes.

## Cómo contribuir al proyecto

Puedes echar un vistazo a los _issues_ abiertos. Pero antes de iniciar mejoras sustanciales —y para no pisarnos la manguera—, por favor explica previamente en un nuevo _issue_ en qué consiste tu propuesta.

## Desarrollo

Es requisito tner Node versión 20 o superior.

Arranca el servidor de desarrollo con `yarn serve` o `npm run serve`.

Se incluye una tarea configurada para que esto pueda ser lanzado desde Visual Studio Code.

## Catálogo

El inventario de observatorios es una estructura de datos en [httpdocs/observatories.json](httpdocs/observatories.json).
