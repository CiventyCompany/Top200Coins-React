import {
  filterTypes,

  default as filterFunc
} from 'routes/Home/modules/coins/filter'

describe('Home (Helper) filter', () => {
  it('should export filterTypes', () => {
    expect(filterTypes).to.be.ok()
  })

  it('should export filter function', () => {
    expect(filterFunc).to.be.a('function')
  })

  describe('filter types', () => {
    it('should have a FIRST_10 property', () => {
      expect(filterTypes.FIRST_10).to.be.ok()
    })

    it('should have a FIRST_50 property', () => {
      expect(filterTypes.FIRST_50).to.be.ok()
    })
  })

  describe('filter function', () => {
    it('should return original array if unknown type', () => {
      let arr = [1, 2]
      expect(filterFunc(arr, undefined)).to.be.equal(arr)
    })

    it('should handle FIRST_10 filter', () => {
      let arr = []
      arr.length = 100
      expect(filterFunc(arr, filterTypes.FIRST_10).length).to.be.equal(10)
    })

    it('should handle FIRST_50 filter', () => {
      let arr = []
      arr.length = 100
      expect(filterFunc(arr, filterTypes.FIRST_50).length).to.be.equal(50)
    })
  })
})
