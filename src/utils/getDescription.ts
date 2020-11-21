export const getDescription = (input, maxLength = 100) => {
  let description: string = ""
  if (input.length > maxLength) {
    description = input?.slice(0, maxLength) + "..."
  } else {
    description = input
  }
  return description
}
