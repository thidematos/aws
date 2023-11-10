class Features {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filter() {
    const { page, sort, limit, fields, ...queryObj } = this.queryString;

    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

    this.query = this.query.find(JSON.parse(queryStr));

    return this;
  }

  sort() {
    const { sort } = this.queryString;

    if (sort) {
      const sortBy = sort.split(',').join(' ');
      this.query = this.query.sort(sortBy);
    }

    if (!sort) {
      this.query = this.query.sort('-createdAt');
    }

    return this;
  }

  limitFields() {
    const { fields } = this.queryString;
    if (!fields) return this;

    const fieldStr = fields.split(',').join(' ');
    this.query = this.query.select(fieldStr);

    return this;
  }

  paginate() {
    const { page, limit } = this.queryString;

    const pageNumber = +page || 1;
    const limitNumber = +limit || 5;
    const skip = (pageNumber - 1) * limitNumber;

    this.query = this.query.skip(skip).limit(limitNumber);

    return this;
  }
}

module.exports = Features;
