import * as destinationService from '../../services/destinations';
import { findDestinations } from '../saga';
import * as actions from '../../store/actions';
import { recordSaga } from '../../testing-utils/test-utils';

const list = [{ name: 'Yavin IV', id: 1 }, { name: 'Hoth', id: 2 }];
const initialAction = { searchCriteria: 'abc' };

describe('destination saga', () => {
  destinationService.find = jest.fn();

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should get the matching destinations from API and call find destination success action', async () => {
    destinationService.find.mockImplementation(() => Promise.resolve(list));

    const dispatched = await recordSaga(findDestinations, initialAction);

    expect(destinationService.find).toHaveBeenCalledWith(
      initialAction.searchCriteria
    );
    expect(dispatched).toContainEqual({
      type: actions.FIND_DESTINATION.SUCCESS,
      list
    });
  });

  it('should fails when error and call fin destination failure action', async () => {
    destinationService.find.mockImplementation(() =>
      Promise.reject({ message: 'error' })
    );

    const dispatched = await recordSaga(findDestinations, initialAction);

    expect(destinationService.find).toHaveBeenCalledWith(
      initialAction.searchCriteria
    );
    expect(dispatched).toContainEqual({
      type: actions.FIND_DESTINATION.FAILURE,
      error: 'error'
    });
  });
});
