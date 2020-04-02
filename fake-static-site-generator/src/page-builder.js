import { resolve as pathResolve, join as pathJoin } from 'path'
import { writeFileSync, mkdirSync } from 'fs'

import { htmlPageTemplate, feedXmlTemplate } from './page-templates'

import site from './site-structure'

export const buildSite = (domain) => {
  const outputDir = pathResolve(pathJoin(__dirname, '..', 'generated'))

  try {
    mkdirSync(outputDir)
  } catch(error) {
    console.log('generated dir already exists')
  }

  site.forEach((page) => {
    const fileName = page.uri.split('/').pop()
    const template = (page.uri.endsWith('feed.xml') ? feedXmlTemplate : htmlPageTemplate)(page).split('$DOMAIN').join(domain)
    writeFileSync(pathJoin(outputDir, fileName), template)
  })
}
