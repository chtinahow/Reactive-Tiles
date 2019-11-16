import StaticLabel from './StaticLabel'

describe('StaticLabel', () => {
  describe('with default props', () => {
    const wrapper = StaticLabel()

    it('should match snapshot', () => {
      expect(wrapper.outerHTML).toMatchSnapshot()
    })
  })
})
