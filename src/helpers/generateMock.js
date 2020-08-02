function getRandomStatus () {
  const options = ['ok', 'alert', 'error']

  return options[Math.floor(Math.random() * 3)]
}

class Control {
  constructor (type) {
    this.type = type

    this.dev = Math.floor(Math.random() * 100 - 50)
    this.devOutTotal = Math.floor(Math.random() * 100 - 50)
    this.status = getRandomStatus()
  }
  
}

class Feature {
  constructor (
    _id,
    name,
    status,
    uiColStart,
    uiColEnd,
    uiRowStart,
    uiRowEnd,
    controls,
  ) {
    this._id = _id
    this.name = name
    this.status = status
    this.uiColStart = uiColStart
    this.uiColEnd = uiColEnd
    this.uiRowStart = uiRowStart
    this.uiRowEnd = uiRowEnd
    this.controls = controls
  }
}

export default function generateMock () {
  const mockedData = {
    data: {
      _id: '12345',
      name: 'Part A',
      features: [
        new Feature ('123451', 'Hole 1', getRandomStatus(), 1, 4, 1, 3, [
          new Control ('x'),
          new Control ('y'),
          new Control ('z'),
          new Control ('Diameter'),
          new Control ('x'),
          new Control ('y'),
          new Control ('z'),
          new Control ('Diameter'),
          new Control ('x'),
          new Control ('y'),
          new Control ('z'),
          new Control ('Diameter'),
        ]),
        new Feature ('123451', 'Hole 2', getRandomStatus(), 4, 7, 1, 2, [
          new Control ('x'),
          new Control ('y'),
          new Control ('z'),
          new Control ('Diameter'),
        ]),
        new Feature ('123443', 'Hole 3', getRandomStatus(), 4, 7, 2, 3, [
          new Control ('x'),
          new Control ('y'),
          new Control ('z'),
          new Control ('Diameter'),
        ]),
        new Feature ('123454', 'Hole 4', getRandomStatus(), 7, 10, 1, 2, [
          new Control ('x'),
          new Control ('y'),
          new Control ('z'),
          new Control ('Diameter'),
        ]),
        new Feature ('123445', 'Hole 5', getRandomStatus(), 7, 10, 2, 3, [
          new Control ('x'),
          new Control ('y'),
          new Control ('z'),
          new Control ('Diameter'),
        ]),
        new Feature ('123451', 'Hole 6', getRandomStatus(), 10, 13, 1, 3, [
          new Control ('x'),
          new Control ('y'),
          new Control ('z'),
          new Control ('Diameter'),
          new Control ('x'),
          new Control ('y'),
          new Control ('z'),
          new Control ('Diameter'),
          new Control ('x'),
          new Control ('y'),
          new Control ('z'),
          new Control ('Diameter'),
        ]),
      ]
    }
  }

  return mockedData
}