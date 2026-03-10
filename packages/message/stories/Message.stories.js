import MessageDemo from './message-demo.vue';
import XiMessage from '..';

export default {
  title: 'Example/Message',
  component: XiMessage,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MessageDemo },
  template: '<message-demo></message-demo>',
});

export const Example = Template.bind({});

Example.args = {};
