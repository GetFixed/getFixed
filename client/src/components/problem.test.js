import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// components
import Problem from '../components/problem.jsx';

const problem = {
  num: '1406b551-995d-4cba-8734-28a50a4e9f1a',
  username: 'BLittle',
  password: '456',
  email: 'brandon@testing.com',
  avg_rating: "5.00",
  rating_count: 4,
  city: "Indianapolis",
  phone_number: "19834128082"
}; // sample problem

describe('<Problem />', () => {
  xit('should render', () => {
    const wrapper = shallow(<Problem problem={problem}/>)
    expect(wrapper.exists()).toBe(true);
  });
  xit ('should contain an image', () => {
    const wrapper = shallow(<Problem problem={problem}/>)
    expect(wrapper.find('img')).toHaveLength(1);
  });
  xit('should render a title', () => {
    const wrapper = shallow(<Problem problem={problem}/>)
    expect(wrapper.find('.problemTitle')).toHaveLength(1);
  });
  xit('should render a description of the problem', () => {
    const wrapper = shallow(<Problem problem={problem}/>)
    expect(wrapper.find('.problemDesc')).toHaveLength(1);
  });
  xit('should not render a chat section', () => {
    const wrapper = shallow(<Problem problem={problem}/>)
    expect(wrapper.find('.chat')).toHaveLength(0);
  });
});