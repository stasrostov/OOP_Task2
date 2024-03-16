import { loadUser } from '../user';
import { httpGet } from '../http';
import { saveUser } from '../user';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('should call loadUser once', () => {
  httpGet.mockReturnValue(JSON.stringify({}));

  const response = loadUser(1);
  expect(response).toEqual({});
  expect(httpGet).toHaveBeenCalledWith('http://server:8080/users/1');
});

test('should throw an error when saveUser is called', () => {
  expect(() => {
    saveUser();
  }).toThrow('Unimplemented');
});
