import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'jest-enzyme'

Enzyme.configure({ adapter: new Adapter() })

global.shallow = Enzyme.shallow
global.render = Enzyme.render
global.mount = Enzyme.mount
