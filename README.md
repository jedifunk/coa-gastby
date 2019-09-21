# COA Theme Gatsby port
WP + WPGraphQL + Gatsby

This is a personal project. I am porting an existing custom Wordpress theme to Gatsby.

I am using the [WPGraphQL](http:wpgraphql.com) plugin to create the GraphQL schema.

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
