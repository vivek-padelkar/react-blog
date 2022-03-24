export const notFound = (req, res, next) => {
  const error = new Error('route not found' + req.originalUrl)
  res.status(404)
  next(error)
}

export const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode
  res.status(statusCode)
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'DEV' ? err.stack : null,
  })
}
