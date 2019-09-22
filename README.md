# COA theme Gatsby port
WP + WPGraphQL + Gatsby

This is a personal project. I am porting an existing custom Wordpress theme to Gatsby.

Tools in use:
- [WPGraphQL](https://wpgraphql.com) plugin to create the GraphQL schema.
- [Algolia](https://www.algolia.com/) for search.
- Instagram feed added via [gatsby-source-instagram](https://www.gatsbyjs.org/packages/gatsby-source-instagram/).

## Create config file
```javascript
const Config = {
  source: {
    protocol: 'https',
    wpUrl: 'yourdomain.com',
  }
}

Config.source.url = Config.source.protocol + '://' + Config.source.wpUrl;

module.exports = Config
```

---
### TODO
- [x] ~~Add body classes~~
- [x] ~~Add User archive~~
- [x] ~~Homepage hero~~
- [ ] Featured Image refactor to not query for every post (if possible)
- [ ] Homepage layout
- [ ] Move images to CDN
- [ ] Use Gatsby Image for responsiveness
- [ ] Gallery popup, with EXIF data
- [ ] Add social share
- [ ] Add page transitions
- [ ] Add Yoast SEO via WPGraphQL
- [ ] Integrate analytics
- [ ] 404 page
- [ ] Test Algolia once ready to deploy, can't seem to test from localhost.
