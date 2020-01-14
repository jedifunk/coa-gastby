module.exports = () => {
  return `
    ... on WPGraphQL_CoreVideoBlock {
      attributes {
        src
        poster
        preload
        playsInline
        muted
        loop
        controls
        className
        caption
        autoplay
        align
      }
    }
  `
}