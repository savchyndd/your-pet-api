const isHasRequireCategory = (category, currentProperty) => {
  const isRequire = [true, `${currentProperty} is required`];

  if (
    category === "sell" ||
    category === "lost-found" ||
    category === "in-good-hands"
  )
    return isRequire;
};

module.exports = isHasRequireCategory;
