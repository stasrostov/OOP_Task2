import { httpGet, httpPost } from '../http';

test('httpGet should throw an error with the provided URL', () => {
  const url = 'http://example.com';
  expect(() => {
    httpGet(url);
  }).toThrow(url);
});

test('httpPost should throw an error with the provided URL', () => {
  const url = 'http://example.com';
  expect(() => {
    httpPost(url);
  }).toThrow(url);
});
