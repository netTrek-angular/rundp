import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCounter from "./counter.reducer";
import * as fromAppStore from "./app.reducer";

export const selectTest1 = createFeatureSelector<number>(
  fromAppStore.test1FeatureKey
);

export const selectTest2 = createFeatureSelector<number>(
  fromAppStore.test2FeatureKey
);

export const selectTestSum = createSelector(
  selectTest1,
  selectTest2,
  (t1, t2) => t1 + t2
);
