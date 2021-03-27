import { get } from 'lodash';

export default (error: any) => {
  const statusCode =
    get(error, 'networkError.statusCode') || get(error, 'statusCode');
  const messages =
    get(error, 'networkError.result.errors') || get(error, 'description');

  return { statusCode, messages };
};
