import nock from 'nock';

const configuredNock = () => {
  const baseUrl = 'http://localhost:8000';

  nock.disableNetConnect();
  nock.enableNetConnect(baseUrl);

  return {
    nock,
    run: (argsForNock) => {
      argsForNock(nock(baseUrl));
    },
  };
};

export default configuredNock;