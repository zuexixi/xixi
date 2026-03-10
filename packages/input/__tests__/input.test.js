/* eslint-disable no-undef */
import XiInput from '..';

import { mount } from '@vue/test-utils';

describe('xi-input', () => {
  test('input-renders', () => {
    const wrapper = mount(XiInput);
    expect(wrapper.html()).toContain('input')
  })

  test('input-v-model', () => {
    const wrapper = mount(XiInput, {
      propsData: {
        value: 'test'
      }
    });
    expect(wrapper.vm.currentValue).toBe('test')
  })

  test('input-placeholder', () => {
    const wrapper = mount(XiInput, {
      propsData: {
        placeholder: '请输入内容'
      }
    });
    expect(wrapper.find('input').attributes('placeholder')).toBe('请输入内容')
  })

  test('input-disabled', () => {
    const wrapper = mount(XiInput, {
      propsData: {
        disabled: true
      }
    });
    expect(wrapper.find('input').attributes('disabled')).toBe('disabled')
  })

  test('input-size', () => {
    const wrapper = mount(XiInput, {
      propsData: {
        size: 'large'
      }
    });
    expect(wrapper.find('input').classes()).toContain('is-large')
  })

  test('input-clearable', () => {
    const wrapper = mount(XiInput, {
      propsData: {
        value: 'test',
        clearable: true
      }
    });
    expect(wrapper.vm.currentValue).toBe('test')
  })
})
