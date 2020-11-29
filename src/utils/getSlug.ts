export const getSlug = (val: string) => {
  const newVal = "/messages" + val
  return newVal.replace(" ", "-")
}
