import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// components
import ProblemsView from '../components/problemsView.jsx';

const problems = [
  {
    id: 123,
    title: 'Broken Watch',
    description: 'Needs new hands and battery',
  },
  {
    id: 124,
    title: 'Antique table needs new leg',
    description: `My grandmother's heirloom table has a broken leg, and we hope someone can help us fix dat shit`
  },
  {
    id: 125,
    title: `My iPhone's screen don't work`,
    description: `Shit's broke`
  }
] // sample problem

describe('<ProblemsView />', () => {
  xit('should be defined', () => {
    expect(ProblemsView).toBeDefined();
  });
  xit('should render', () => {
    const wrapper = shallow(<ProblemsView problems={problems}/>);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });
  xit ('should render all problems in the problems array', () => {
    const problemsCount = problems.length;
    const wrapper = shallow(<ProblemsView problems={problems}/>)
    expect(wrapper.find('Apollo(Problem)')).toHaveLength(problemsCount);
  });
  xit(`should have a semantic ui class of 'ui cards'`, () => {
    const wrapper = shallow(<ProblemsView problems={problems}/>)
    expect(wrapper.find('.cards')).toHaveLength(1);
  });
  xit('should have a header with the text "Listings"', () => {
    const wrapper = shallow(<ProblemsView problems={problems}/>)
    expect(wrapper.find('.header')).toHaveLength(1);
  });
});