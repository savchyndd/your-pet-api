const isHasRequireCategory = (category, currentProperty) => {
  const isRequire = [true, `${currentProperty} is required`];
  if (category === "sell" && currentProperty === "price") return isRequire;

  if (currentProperty !== "price") {
    if (
      category === "sell" ||
      category === "lost-found" ||
      category === "in-good-hands"
    )
      return isRequire;
  }
};

module.exports = isHasRequireCategory;
