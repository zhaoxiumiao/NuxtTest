export default function ({ $axios, error: nuxtError }, inject) {
  // Create a custom axios instance
  const api = $axios.create({
    headers: {
      common: {
        Accept: 'text/plain, */*'
      },
    }
  })

  // Set baseURL to something different
  api.setBaseURL('http://172.20.10.4:8000/api')

  api.setToken('23')

  api.setHeader('xxx1111', '32442')

  // api.onError(error => {
  //   nuxtError({
  //     statusCode: error.response.status,
  //     message: error.message,
  //   });
  //   return Promise.resolve(false);
  // })

  // Inject to context as $api
  inject('api', api)
}