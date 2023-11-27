import { g, config } from '@grafbase/sdk'

export default config({
  schema: g,
  auth: {
    rules: (rules) => {
      rules.public()
    },
  },
})
