import InputDemo from './input-demo.vue';
import XiInput from '..';

export default {
  title: 'Example/Input',
  component: XiInput,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { InputDemo },
  template: '<input-demo></input-demo>',
});

export const Example = Template.bind({});

Example.args = {};
