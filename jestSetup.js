import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
// TODO: change to the official implementation

Enzyme.configure({ adapter: new Adapter() });
