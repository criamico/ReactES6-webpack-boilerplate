import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// const context = require.context('../../spec', true, /spec$/);
// context.keys().forEach(context);
