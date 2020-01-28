import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App props={[{
        id: 1,
        name: 'Koren Templeton',
        avatar:
            'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1',
        inSession: true,
        onStage: true
    }]}/>);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

it('renders without crashing', () => {
  // first create a DOM element to render the component into
  const div = document.createElement('div');
  ReactDOM.render(<App 
        id= '1'
        name= 'Koren Templeton'
        avatar=
            'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1'
        inSession= 'true'
        onStage= 'true'/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
  const tree = renderer
    .create(<App 
        id= '1'
        name= 'Koren Templeton'
        avatar=
            'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1'
        inSession= 'true'
        onStage= 'true'
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();  
  });