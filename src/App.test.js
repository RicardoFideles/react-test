import React from 'react';
import App from './App';

import { shallow, mount } from 'enzyme';

global.localStorage = {
  getItem: () => {}
}

it('renders without crashing', () => {
  expect(shallow(<App />)).toMatchSnapshot();
});


// it('deletar todos os elementos', () => {

// })