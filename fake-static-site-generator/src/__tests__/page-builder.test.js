import { buildSite } from '../page-builder'

test('it loads the structure', () => {
  buildSite('https://localhost:8080')
})
