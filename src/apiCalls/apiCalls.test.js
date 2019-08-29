import { getData } from '../apiCalls/apiCalls.js'

describe('getData', () => {
  let mockResponse;

  beforeEach(() => {
    mockResponse = [
      {
        name: "iPhone Xs",
        description: "The latest phone to come out by Apple. It has a faster processor and improved camera to take HDR images.",
        price: 900
      }
    ];
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  });

  it('should call fetch with the correct url', () => {
    getData()
    expect(window.fetch).toHaveBeenCalledWith('http://localhost:3001/api/v1/purchases');
  });

  it('should return an array of ideas', () => {
    expect(getData()).resolves.toEqual(mockResponse);
  });

  it('should return an error', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    })
    expect(getData()).rejects.toEqual(Error('Error Fetching Purchases'))
  });
});