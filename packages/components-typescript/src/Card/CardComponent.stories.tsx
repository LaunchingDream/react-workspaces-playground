import React from 'react';
import { storiesOf } from '@storybook/react';

import Card from '.';
import '../wrapper.css';

storiesOf('Card', module)
  .add('Default', () => (
    <div className="wrapper">
      <Card>
        <span>Basic Card</span>
      </Card>
    </div>
  ))
  .add('Loading', () => (
    <div className="wrapper">
      <Card loading></Card>
    </div>
  ));
