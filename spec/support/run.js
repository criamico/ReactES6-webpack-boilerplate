import Jasmine from 'jasmine';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

// let jasmine = new Jasmine();
// // this line to point to your jasmine.json
// jasmine.loadConfigFile('spec/support/jasmine.json');
// jasmine.execute();
