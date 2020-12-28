import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })
//Configuración para trabajar con peticiones http
global.fetch = require('jest-fetch-mock')
