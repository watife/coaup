import fs from 'fs'
import path from 'path'

const generateTemplateRoute = (route) => {
  return path.join(__dirname, `./${route}.pug`)
}

const templates = {
  register: generateTemplateRoute('register'),
}

export default templates
