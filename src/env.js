export const dev = window.location.origin.includes('localhost')
export const baseURL = dev ? 'http://localhost:3000' : ''
export const useSockets = false
export const domain = 'dev-4ed7g57f.us.auth0.com'
export const audience = 'https://artists.com'
export const clientId = 'HGumQCPB3PbZKFkWQis1OKN0fdVEjayc'