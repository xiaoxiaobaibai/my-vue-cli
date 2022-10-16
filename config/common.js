export function preApi() {
  const env = process.env.NODE_ENV
  switch (env) {
    case 'development':
      return ''
    case 'test':
      return location.origin
    case 'production':
      return location.origin
    default: return ''
  }
}