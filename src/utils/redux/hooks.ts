import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from './store';
import { RootState } from './rootReducer';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>;
