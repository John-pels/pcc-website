/**
 * colors defined here
 */

const colors = {
  primary: "#05A66B",
  white: "#FFF",
  gold: "#F2D680",
  hue: "hsla(0,0%,0%,0.6)",
}

/**
 * @param maxWidth max width of media query
 */

const customMediaQuery = (maxWidth: number) =>
  `@media (max-width: ${maxWidth}px)`

/**
 * List of available media queries
 * To use media query from a styled components, use
 * ```js
 * ${({theme}) => theme.media.desktop}
 * ```
 */

interface Media {
  custom: (maxNumber: number) => string
  sm: string
  md: string
  lg: string
  xl: string
}

const media: Media = {
  custom: customMediaQuery,
  /**
   * small displays like phones
   */
  sm: customMediaQuery(592),
  /**
   * medium displays like tablets
   */
  md: customMediaQuery(768),
  /**
   * fairly large displays like small laptops
   */
  lg: customMediaQuery(992),
  /**
   * laptops and others
   */
  xl: customMediaQuery(1024),
}

/**
 *
 * @param val font size as number(unitless)
 */

const customFontSize = (val: number) => `${val}px`

const fontSize = {
  custom: customFontSize,
  small: customFontSize(12),
  /**
   * normal font size
   */
  normal: customFontSize(16),
  /**
   * font size for headers
   */
  heading: customFontSize(20),

  hero: customFontSize(64),

  navlink: customFontSize(14),
}

/**
 * font family
 */
const fontFamily = {
  /**
   * normal font family
   */
  normal: "Roboto, sans-serif",
  /**
   * font family for headers
   */
  heading: "Raleway, sans-serif",
}

export { colors, media, fontSize, fontFamily }
