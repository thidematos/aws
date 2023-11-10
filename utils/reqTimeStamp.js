const createReqTime = (req, res, next) => {
  req.requestTimeStamp = Date.now();
  next();
};

module.exports = createReqTime;
