import React, { Component } from 'react';
import List from './List';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

// import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  // first create a DOM element to render the component into
  const div = document.createElement('div');
  ReactDOM.render(<List
        id= '1'
        name= 'Koren Templeton'
        avatar=
            'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1'
        inSession= true
        onStage= true
    />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
  const tree = renderer
    .create(<List 
        id= '1'
        name= 'Koren Templeton'
        avatar=
            'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1'
        inSession= true
        onStage= true/>)
    .toJSON();
  expect(tree).toMatchSnapshot();  
  });