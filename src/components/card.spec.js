import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import Card from './Card';

describe ('Card component', () => {

  it('should render a Card component', () => {
    const id = 'sample id of a card';
    const text = 'sample text of a card'

    const renderer = TestUtils.createRenderer();
    renderer.render(<Card id={id} text={text} />);
    const output = renderer.getRenderOutput();
    console.log(output);
  });
});
