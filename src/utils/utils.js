export const filteredCards = (cards) => {
  return cards.filter((e) => e.author._id === '64423c303291d790b3fc967c');
};

export const findLiked = (product, id) => {
  return product.likes.some((e) => e === id);
};
export const getHats = (numb, field = 'товар') => {
  const tmp = numb % 10;
  if (!tmp || !numb) {
    return ` ${field}ов`;
  }
  if (tmp >= 10 && tmp <= 14) {
    return ` ${field}ов`;
  }

  if (tmp === 1) {
    return ` ${field}`;
  }
  if (tmp > 1 && tmp < 5) {
    return ` ${field}а`;
  }
  if (tmp > 5 && tmp < 9) {
    return ` ${field}ов`;
  }
  return ` ${field}ов`;
};

export const hatsRating = (reviews) => {
  if (!reviews || !reviews.length) {
    return 0;
  }
  const res = reviews.reduce((acc, el) => (acc += el.rating), 0);
  return res / reviews.length;
};
