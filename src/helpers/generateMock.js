export default function generateMock () {
  const mockedData = {
    data: {
      _id: '12345',
      name: 'Part A',
      features: [
        {
          _id: 123451,
          name: 'Hole 1',
          status: 'ok',
          controls: [
            {
              type: 'x',
              dev: 0.01,
              devOutTotal: 0.02,
              status: 'ok'
            },
            {
              type: 'y',
              dev: 0.01,
              devOutTotal: 0.02,
              status: 'alert'
            },
            {
              type: 'z',
              dev: 0.01,
              devOutTotal: 0.02,
              status: 'error'
            },
          ]
        },
        {
          _id: 123452,
          name: 'Hole 2',
          status: 'error',
          controls: [
            {
              type: 'x',
              dev: 0.01,
              devOutTotal: 0.02,
              status: 'ok'
            },
            {
              type: 'y',
              dev: 0.01,
              devOutTotal: 0.02,
              status: 'alert'
            },
            {
              type: 'z',
              dev: 0.01,
              devOutTotal: 0.02,
              status: 'error'
            },
          ]
        },
      ]
    }
  }

  return mockedData
}