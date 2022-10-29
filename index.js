const self = {
  mapArray: (array, key) => {
    const map = []
    array.forEach(item => {
      const map_key = item[key]
      map[map_key] = item
    })
    return map
  }
}

module.exports = self