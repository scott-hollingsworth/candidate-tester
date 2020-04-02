const aHref = url => `<a href="${url}">${url}</a>`
const imgSrc = src => `<img src="${src}" />`

export const htmlPageTemplate = ({ internalLinks, externalLinks, images }) => `<!DOCTYPE html>
<html>
<head>
  <meta charSet="utf-8"/>
  <meta http-equiv="x-ua-compatible" content="ie=edge"/>
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
</head>
<body>
${internalLinks.map(aHref).join('\n').trim()}
${externalLinks.map(aHref).join('\n').trim()}
${images.map(imgSrc).join('\n').trim()}
</body>
</html>`

const channelItem = url => `<item>
  <title>${url}</title>
  <description>A description for ${url}</description>
  <link>${url}</link>
  <guid isPermaLink="true">${url}</guid>
  <category>Uncategorized</category>
</item>`

export const feedXmlTemplate = ({ uri, internalLinks }) => `<rss xmlns:atom="https://www.w3.org/2005/Atom" version="2.0">
<channel>
  <title>Fake Site</title>
  <description>This is a fake site.</description>
  <link>${uri.replace('/feed.xml', '')}</link>
  <atom:link href="${uri}" rel="self" type="application/rss+xml"/>
  <pubDate>Sun, 22 Mar 2020 11:51:14 -0400</pubDate>
  <lastBuildDate>Sun, 22 Mar 2020 11:51:14 -0400</lastBuildDate>
  <generator>FakeSiteGenerator-0.0.1</generator>
  ${internalLinks.map(channelItem).join('\n').trim()}
</channel>
</rss>`
