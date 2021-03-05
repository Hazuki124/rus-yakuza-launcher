import { createAsyncActions, createSyncActionType } from '../../utils/redux';
import asyncActions from './asyncActions';
import syncActions from './syncActions';

const asyncConstants = createAsyncActions(...asyncActions);
const syncConstants = createSyncActionType(...syncActions);

export default {
  ...asyncConstants,
  ...syncConstants
};
