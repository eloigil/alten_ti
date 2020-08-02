export default function generateMock () {
  const mockedData = {
    data: {
      _id: '12345',
      name: 'Part A',
      features: [
        {
          _id: 123451,
          name: 'Hole 1',
          controls: [
            {
              type: 'x',
              dev: 0.01,
              devOutTotal: 0.02,
            }
          ]
        }
      ]
    }
  }

  return mockedData
}