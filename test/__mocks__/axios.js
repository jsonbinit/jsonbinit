const mockedAxios = {
  get: jest.fn(),
  post: jest.fn()
}

mockedAxios.get.mockImplementation((url) => {
  let err
  switch (url) {
    case 'https://api.jsonbin.it/bins/1':
      return Promise.resolve({ data: { data: 3 } })
    case 'https://api.jsonbin.it/bins/2':
      err = new Error('')
      err.response = { status: 404 }
      return Promise.reject(err)
    case 'https://api.jsonbin.it/bins/D1TT0':
      err = new Error('')
      err.response = { status: 500 }
      return Promise.reject(err)
  }
})

mockedAxios.post.mockImplementation((url, params = {}) => {
  let err
  switch (url) {
    case 'https://api.jsonbin.it/bins/':
      if (params.data === 'fail') {
        err = new Error('')
        err.response = { status: 500 }
        return Promise.reject(err)
      } else {
        return Promise.resolve({ data: { bin: 'WySIwYg3' } })
      }
  }
})

module.exports = mockedAxios
