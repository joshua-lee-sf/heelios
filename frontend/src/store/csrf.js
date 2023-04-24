async function  csrfFetch(url, options = {}) {
  options.headers ||= {}
  options.method ||= 'GET'

  if(options.method !== 'GET'){
    options.headers['Content-Type'] ||= 'application/json'
    options.headers['X-CSRF-Token'] = sessionStorage.getItem('X-CSRF-Token')
  }

  const res = await fetch(url, options)
  if (res.status >= 400) throw res;
  return res;
}

export const storeCSRFToken = (response) => {
  const token = response.headers.get('X-CSRF-Token');
  if(token) sessionStorage.setItem('X-CSRF-Token', token);
}

export async function restoreCSRF() {
  const response = await csrfFetch('/api/session');
  storeCSRFToken(response);
  return response;
}
export default csrfFetch