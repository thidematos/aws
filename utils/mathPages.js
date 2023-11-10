module.exports = (results) => {
  let numPages = results / 5;
  if (results % 5 > 0) numPages++;
  const pages = [];

  for (let i = 1; i <= numPages; i++) {
    pages.push(i);
  }

  return pages;
};
