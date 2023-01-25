import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { App } from './app';

const Story: ComponentMeta<typeof App> = {
  component: App,
  title: 'App',
};
export default Story;

const Template: ComponentStory<typeof App> = (args) => <App {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
