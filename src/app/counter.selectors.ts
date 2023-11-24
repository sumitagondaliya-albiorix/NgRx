import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './app.state';

export const selectCounter = createFeatureSelector<AppState, number>('counter');

export const getCount = createSelector(selectCounter, (state) => state);