export enum HttpStatusCode {
  noContent = 204,
  unauthorided = 401
}

export type HttpResponse = {
  statusCode: HttpStatusCode
  body?: any
}
