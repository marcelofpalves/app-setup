import fs from 'fs'
import path from 'path'

const certificatePath = path.resolve(
  __dirname,
  '..',
  '..',
  'resources',
  'certificates'
)

// chrome://flags/#allow-insecure-localhost
const certificate = {
  key: fs.readFileSync(path.join(certificatePath, 'server.key')),
  cert: fs.readFileSync(path.join(certificatePath, 'server.crt'))
}

const publicPath = path.resolve(__dirname, '..', '..', 'resources', 'public')

export default {
  publicPath,
  certificate
}
