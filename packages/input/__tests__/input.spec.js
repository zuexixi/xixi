import { mount } from '@vue/test-utils'
import XiInput from '../src/input.vue'

describe('XiInput', () => {
  test('renders correctly', () => {
    const wrapper = mount(XiInput)
    expect(wrapper.contains('input')).toBe(true)
  })

  test('v-model works', () => {
    const wrapper = mount(XiInput, {
      propsData: {
        value: 'test'
      }
    })
    expect(wrapper.vm.currentValue).toBe('test')
  })

  test('placeholder works', () => {
    const wrapper = mount(XiInput, {
      propsData: {
        placeholder: '请输入内容'
      }
    })
    expect(wrapper.find('input').attributes('placeholder')).toBe('请输入内容')
  })

  test('disabled works', () => {
    const wrapper = mount(XiInput, {
      propsData: {
        disabled: true
      }
    })
    expect(wrapper.find('input').attributes('disabled')).toBe('disabled')
  })

  test('size works', () => {
    const wrapper = mount(XiInput, {
      propsData: {
        size: 'large'
      }
    })
    expect(wrapper.find('input').classes()).toContain('is-large')
  })

  test('input event', () => {
    const wrapper = mount(XiInput)
    wrapper.find('input').setValue('hello')
    expect(wrapper.emitted('input')).toBeTruthy()
  })

  test('clearable works', async () => {
    const wrapper = mount(XiInput, {
      propsData: {
        value: 'test',
        clearable: true
      }
    })
    expect(wrapper.vm.currentValue).toBe('test')
    wrapper.find('.xi-icon-close').trigger('click')
    expect(wrapper.vm.currentValue).toBe('')
  })
})
