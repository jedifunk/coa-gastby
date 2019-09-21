# COA Theme Gatsby port
WP + WPGraphQL + Gatsby

This is a personal project. I am porting an existing custom Wordpress theme to Gatsby.

I am using the [WPGraphQL](http:wpgraphql.com) plugin to create the GraphQL schema.

## Create config file
```javascript
const config = {
  wpUrl: `https://yourdomain.com`,
}

module.exports = config
