import React from 'react';
import ReactDOM from 'react-dom';
import Project from './Project';
import renderer from 'react-test-renderer';

const lw = {
  title: ' 🌤️ LocalWeather.',
  desc: 'Plaintext description of the weather on top of beautiful relevant Unsplash images.',
  preview: 'images/weather.png',
  badges: [
    {
      text: '🔗 View Project',
      link: '//calumptrck.github.io/LocalWeather/'
    },
  ],
  longDesc: "LocalWeather is a a weather homepage which tells you what's relevant, and nothing else.",
  featured: false,
};

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Project key={"Title"} project={lw} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('has a valid snapshot', () => {
    const component = renderer.create(
      <Project key={"Title"} project={lw} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });


});