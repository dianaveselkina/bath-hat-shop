export const filteredCards = (cards) => {
  return cards.filter((e) => e.author._id === '64423c303291d790b3fc967c');
};

export const findLiked = (product, id) => {
  return product.likes.some((e) => e === id);
};
