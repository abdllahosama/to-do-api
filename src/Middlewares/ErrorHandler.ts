import { Request, Response } from 'express'

/**
 * this method handel error message
 * @paramerror
 * @param request
 * @param response
 * @param _next
 */
const errorHandler = (
    error: Error,
    _request: Request,
    response: Response
): void => {
    // return status bad request with error message
    response.status(400).json({ message: error.message })
}

export default errorHandler
