# COA theme Gatsby port
WP + WPGraphQL + Gatsby

This is a personal project. I am porting an existing custom Wordpress theme to Gatsby.

Tools in use:
- [WPGraphQL](https://wpgraphql.com) plugin to create the GraphQL schema.
- [Algolia](https://www.algolia.com/) for search.
- Instagram feed added via [gatsby-source-instagram](https://www.gatsbyjs.org/packages/gatsby-source-instagram/).
- Refactored to use [wp-graphql-gutenberg](https://github.com/pristas-peter/wp-graphql-gutenberg) plugin for accessing Gutenberg blocks
- Lightbox functionality provided by [react-image-lightbox](https://www.npmjs.com/package/react-image-lightbox)

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

## WP functions file addition
This function creates the custom WPGraphQL connection between CoreGalleryBlock and MediaItem, adding the option to query for image metadata on the block itself. Using this to bring in image EXIF data to the Lightbox.
```
function coa_register_graphql_connection() {
  
  register_graphql_connection( [
		'fromType' => 'CoreGalleryBlock',
    'toType' => 'MediaItem',
    'fromFieldName' => 'galleryImages',
    'resolve' => function( $gallery_block, $args, $context, $info ) {
			$image_ids = ! empty($gallery_block['attributes']['ids']) ? $gallery_block['attributes']['ids'] : null;
      $resolver   = new \WPGraphQL\Data\Connection\PostObjectConnectionResolver( $source, $args, $context, $info, 'attachment' );
      $resolver->setQueryArg( 'post__in', $image_ids ); // This sets the WP_Query to query just these ids    
			$connection = $resolver->get_connection();
			return $connection;
    },
    'resolveNode' => function( $id, $args, $context, $info ) {
      return \WPGraphQL\Data\DataSource::resolve_post_object( $id, $context );
    }
  ] );
}

add_action( 'graphql_register_types', 'coa_register_graphql_connection' );
```

---
### TODO
- [x] ~~Add body classes~~
- [x] ~~Add User archive~~
- [x] ~~Homepage hero~~
- [x] ~~Homepage layout~~
- [x] ~~Move images to CDN~~
- [x] ~~Create Gatsby component for each Gutenberg block type~~
- ~~[ ] Use Gatsby Image for responsiveness~~ Unnecessary since using CDN
- [ ] Lazy load images, maybe(?)
- [x] ~~Gallery popup~~
- [ ] EXIF data to lightbox images
- [x] ~~Add social share~~
- [x] ~~FontAwesome integration~~
- [ ] Add page transitions
- [ ] Add Yoast SEO via WPGraphQL
- [ ] Integrate analytics
- [ ] 404 page
- [ ] Featured Image refactor to not query for every post (if possible)
- [ ] Find way to bring in homepage hero better, currently looking for exact image
- [ ] Adjust WP theme to blank
- [ ] Test Algolia once ready to deploy, can't seem to test from localhost.
