// src/features/events/selectors.js

export const selectEvents = (state) => state.events.items;
export const selectEventsLoading = (state) => state.events.loading;
export const selectEventsError = (state) => state.events.error;
