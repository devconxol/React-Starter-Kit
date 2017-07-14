import React from 'react';
import { shallow } from 'enzyme';
export const renderer = (Component, props = {}) => shallow(<Component {...props} />);