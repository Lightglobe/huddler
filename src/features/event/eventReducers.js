import { createReducer } from "../../app/common/util/reducerUtils";
import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT } from "./eventConstants";

const initialState = [
  {
    id: "1",
    title: "Trip to Limassol",
    date: "2021-01-23T10:00:00+00:00",
    category: "Food",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    city: "Limassol, Cyprus",
    venue: "My Mall of Limassol",
    hostedBy: "Bob",
    hostPhotoURL: "/assets/user.png",
    attendees: [
      {
        id: "a",
        name: "Bob",
        photoURL: "http://placeimg.com/640/480/people",
      },
      {
        id: "b",
        name: "Tom",
        photoURL: "http://placeimg.com/640/480/people",
      },
    ],
  },
  {
    id: "2",
    title: "Trip to Troodos",
    date: "2021-01-02T10:00:00+00:00",
    category: "Culture",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    city: "Troodos, Limassol, Cyprus",
    venue: "Chionistra Restaurant",
    hostedBy: "Tom",
    hostPhotoURL: "http://placeimg.com/640/480/people",
    attendees: [
      {
        id: "a",
        name: "Bob",
        photoURL: "http://placeimg.com/640/480/people",
      },
      {
        id: "b",
        name: "Tom",
        photoURL: "http://placeimg.com/640/480/people",
      },
    ],
  },
  {
    id: "3",
    title: "Trip to Troodos",
    date: "2021-01-02T10:00:00+00:00",
    category: "Culture",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    city: "Troodos, Limassol, Cyprus",
    venue: "Chionistra Restaurant",
    hostedBy: "Tom",
    hostPhotoURL: "/assets/user.png",
    attendees: [
      {
        id: "a",
        name: "Bob",
        photoURL: "http://placeimg.com/640/480/people",
      },
      {
        id: "b",
        name: "Tom",
        photoURL: "http://placeimg.com/640/480/people",
      },
    ],
  },
];

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

export default createReducer(initialState, {
  [UPDATE_EVENT]: updateEvent,
  [CREATE_EVENT]: createEvent,
  [DELETE_EVENT]: deleteEvent,
});
