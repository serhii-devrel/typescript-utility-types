interface ResponseData<T> {
  data?: Array<T>;
  error?: string;
  status?: number;
}

const response: Required<ResponseData<object>> = {
  data: [],
  error: '',
  status: 200,
};

console.log(response);
