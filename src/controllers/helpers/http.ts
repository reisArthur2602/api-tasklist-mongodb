type HttpResponse<T> = {
  statusCode: number;
  body: T;
};

type HttpRequest<B> = {
  params?: any;
  headers?: any;
  body?: B;
};

export { HttpRequest, HttpResponse };
