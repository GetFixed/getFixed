import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

//components
import FixButton from './../client/src/components/FixButton';

describe('<FixButton />', () => {
  it('should render', () => {
    const wrapper = shallow(<FixButton />);
    expect(wrapper.exists()).toBe(true);
  })
})