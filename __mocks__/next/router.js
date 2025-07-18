export const useRouter = ()_ => ({
  push: jest.fn(),
  replace: jest.fn(),
  prefetch: jest.fn(),
  back: jest.fn(),
  events: {
    on: jest.fn(),
    off: jest.fn(),
  },
  asPath: '/',
  route: '/',
  pathname: '/',
  query: {},
});