import ReactiveLabel from './ReactiveLabel'

describe('ReactiveLabel', () => {
  describe('with default props', () => {
    const wrapper = ReactiveLabel()

    it('should match snapshot', () => {
      expect(wrapper.outerHTML).toMatchSnapshot()
    })
  })
})
