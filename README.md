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
  },
  search: {
      appID: APP_ID,
      adminKey: ADMIN_KEY,
      searchKey: SEARCH_KEY,
  },
  social: {
      twitterHandle: TWITTER_HANDLE,
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
- [x] ~~Homepage layout~~
- [ ] Move images to CDN
- [ ] Use Gatsby Image for responsiveness
- [ ] Lazy load images, maybe(?)
- [ ] Gallery popup, with EXIF data
- [ ] Find way to bring in homepage hero better, currently looking for exact image
- [x] ~~Add social share~~
- [x] ~~FontAwesome integration~~
- [ ] Add page transitions
- [ ] Add Yoast SEO via WPGraphQL
- [ ] Integrate analytics
- [ ] 404 page
- [ ] Featured Image refactor to not query for every post (if possible)
- [ ] Adjust WP theme to blank
- [ ] Test Algolia once ready to deploy, can't seem to test from localhost.
