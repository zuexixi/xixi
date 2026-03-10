/* eslint-disable no-undef */
import XiMessage from '..';

import { mount } from '@vue/test-utils';

describe('xi-message', () => {
  test('message-renders', () => {
    const wrapper = mount(XiMessage, {
      propsData: {
        visible: true,
        message: '测试消息'
      }
    });
    expect(wrapper.html()).toContain('xi-message')
  })

  test('message-success', () => {
    const wrapper = mount(XiMessage, {
      propsData: {
        visible: true,
        type: 'success'
      }
    });
    expect(wrapper.classes()).toContain('xi-message--success')
  })

  test('message-error', () => {
    const wrapper = mount(XiMessage, {
      propsData: {
        visible: true,
        type: 'error'
      }
    });
    expect(wrapper.classes()).toContain('xi-message--error')
  })

  test('message-warning', () => {
    const wrapper = mount(XiMessage, {
      propsData: {
        visible: true,
        type: 'warning'
      }
    });
    expect(wrapper.classes()).toContain('xi-message--warning')
  })

  test('message-info', () => {
    const wrapper = mount(XiMessage, {
      propsData: {
        visible: true,
        type: 'info'
      }
    });
    expect(wrapper.classes()).toContain('xi-message--info')
  })

  test('message-showClose', () => {
    const wrapper = mount(XiMessage, {
      propsData: {
        visible: true,
        showClose: true
      }
    });
    expect(wrapper.find('.xi-message__close').exists()).toBe(true)
  })
})
