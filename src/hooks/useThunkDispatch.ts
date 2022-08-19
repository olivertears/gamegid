import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../store/reducers';
import { AnyAction } from 'redux';

export const useThunkDispatch = useDispatch<ThunkDispatch<RootState, void, AnyAction>>;