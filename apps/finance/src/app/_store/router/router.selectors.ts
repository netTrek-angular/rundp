import {createFeatureSelector, createSelector} from '@ngrx/store';
import {getSelectors, RouterReducerState} from "@ngrx/router-store";

export const routerFeatureKey = 'router';

export const selectRouterState = createFeatureSelector<RouterReducerState>(
  routerFeatureKey
);

export const selectNavigationId = createSelector(
  selectRouterState,
  ( router: RouterReducerState | undefined ) => router?.navigationId
)

export const selectRouter = createSelector(
  selectRouterState,
  (state: RouterReducerState | undefined) => state?.state
);

export const {
  selectCurrentRoute,
  selectQueryParam,
  selectQueryParams,
  selectFragment,
  selectRouteParam,
  selectRouteParams,
  selectUrl,
  selectRouteData
} = getSelectors(selectRouterState);
