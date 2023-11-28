import { g,config, connector } from '@grafbase/sdk'



const produce = g.type('Produce', {
  name: g.string(),
  quantity: g.int(),
  price: g.float(),
  nutrients: g.string().optional().list().optional(),
})

const User = g.type('User', {
  name: g.string(),
  email: g.string(),
  avatarUrl: g.url(),
  description: g.string().optional(),
  githubUrl: g.url().optional(),
  linkedinUrl: g.url().optional(), 
})

export default config({
  schema: g,
  experimental: {
    ai: true,
  },
  auth: {
    rules: (rules) => {
      rules.public()
    },
  },
  cache: {
    rules: [
      {
        types: ['Query'],
        maxAge: 50,
        staleWhileRevalidate: 60
      }
    ]
  }
})
