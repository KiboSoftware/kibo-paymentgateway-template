import convict from 'convict'

const config = convict({
  env: {
    doc: 'The application environment.',
    format: ['production', 'sandbox', 'development'],
    default: 'sandbox',
    env: 'NODE_ENV',
  },
  settings: {
    merchantId: {
      doc: 'Example payment gateway setting',
      default: '',
    },
    gatewaySecret: {
      doc: 'Example payment gateway setting from env',
      default: '',
      env: 'GATEWAY_API_SECRECT',
    },
  },
})

const env = config.get('env')
const settingsName = env === 'production' ? env : 'sandbox'

config.loadFile(`./settings/${settingsName}.json`)
config.validate({ allowed: 'strict' })

export default config
