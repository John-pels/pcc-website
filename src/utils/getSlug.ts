export const getSlug = (val: string) => {
  const newVal = "/blog" + val
  return newVal.replace(" ", "-")
}
