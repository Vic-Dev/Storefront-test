export const extractImage = (meta) => {
  const imageId = ((meta.variants || [])[0] || {}).ISBN;

  return `https://dynamic.indigoimages.ca/books/${imageId}.jpg?width=140&quality=85&maxheight=200`;
};
