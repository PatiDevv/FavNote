export const cardItemContainsSearchTerm = (val, search) => {
  const formatedValue = search.trim().toLowerCase();

  if (formatedValue == "") {
    return true;
  }

  return val.title.toLowerCase().includes(formatedValue) || val.content.toLowerCase().includes(formatedValue);
};

export const filterCardsByTitle = (twitters, search) => {
  return twitters.filter((val) => cardItemContainsSearchTerm(val, search));
};
