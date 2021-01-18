import { createReducer } from "../../app/common/util/reducerUtils";
import {
  CREATE_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT,
  FETCH_EVENT,
} from "./eventConstants";

const initialState = [];

const createEvent = (state, payload) => {
  return [...state, payload.event];
};

const updateEvent = (state, payload) => {
  return [
    ...state.filter((event) => event.id !== payload.event.id),
    payload.event,
  ];
};

const deleteEvent = (state, payload) => {
  return [...state.filter((event) => event.id !== payload.eventId)];
};

const loadEvents = (state, payload) => {
  return payload.events;
};
export default createReducer(initialState, {
  [UPDATE_EVENT]: updateEvent,
  [CREATE_EVENT]: createEvent,
  [DELETE_EVENT]: deleteEvent,
  [FETCH_EVENT]: loadEvents,
});
