const csrfFetch = () => async (url, options = {}) => {
  options.headers ||= {}
  options.method ||= 'GET'

  if(options.method !== 'GET'){
    options.headers['Content-Type'] ||= 'application/json'
    options.headers[] 
  }
}