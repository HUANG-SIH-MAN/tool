const { expect } = require("chai");
const { mapArray } = require("./index")

describe('test mapArray', () => {
  it("basic", () => {
    const array = [
      {
        user_id: 1,
        name: "Cindy"
      },
      {
        user_id: 2,
        name: "Adam"
      },
    ]

    const map = mapArray(array, "user_id")
    expect(map[1].name).to.be.equal("Cindy")
    expect(map[2].name).to.be.equal("Adam")
  })
});
