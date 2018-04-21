switch process.env.NODE_ENV
  when 'production'
    env = 'prod'
  else
    env = 'dev'

export default config = require("config/#{env}").default
