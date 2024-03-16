#!/usr/bin/env node

import { default as liveServer } from 'live-server'

var params = {
  root: 'httpdocs',
  file: 'index.html',
}

liveServer.start(params)
