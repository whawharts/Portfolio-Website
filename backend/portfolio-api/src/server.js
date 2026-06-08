import app from './app.js'
import { env } from './config/env.js'

app.listen(env.port, () => {
  console.log(`Portfolio API running at http://localhost:${env.port}`)
})
