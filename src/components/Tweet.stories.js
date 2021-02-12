import React from 'react';
import Tweet from './Tweet';

const info = {
  title: 'Tweet',
  component: Tweet,
  argTypes: {},
};

export default info;

const Template = (args) => <Tweet {...args} />;

export const Default = Template.bind({});

Default.args = {};

export const TweetWithComments = Template.bind({});

TweetWithComments.args = {
  comments: [{}, {}],
};
