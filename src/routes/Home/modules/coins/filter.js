export const filterTypes = {
  FIRST_10: 'FIRST_10',
  FIRST_50: 'FIRST_50'
}
const filter = (list, type) => {
  switch (type) {
    case filterTypes.FIRST_10: {
      return list.slice(0, 10)
    }
    case filterTypes.FIRST_50: {
      return list.slice(0, 50)
    }
    default:
      return list
  }
}

export default filter
