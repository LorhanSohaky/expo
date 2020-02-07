import 'react-native';

import React from 'react';
import renderer from 'react-test-renderer';

import { P, B, Strike } from '../Text';

it(`renders P`, () => {
  const tree = renderer.create(<P>demo</P>);
  expect(tree).toMatchSnapshot();
});
it(`renders B`, () => {
  const tree = renderer.create(<B>demo</B>);
  expect(tree).toMatchSnapshot();
});
it(`renders Strike`, () => {
  const tree = renderer.create(<Strike>demo</Strike>);
  expect(tree).toMatchSnapshot();
});
