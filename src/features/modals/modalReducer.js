import { createReducer } from "../../app/common/util/reducerUtils";
import { MODAL_OPEN, MODAL_CLOSE } from "./modalConstants";

const initialState = {
  modalType: null,
  modalProps: {},
};

const openModal = (state, payload) => {
  console.log(payload);
  const { modalType, modalProps } = payload;
  return { modalType, modalProps };
};

const closeModal = (state) => {
  return null;
};

export default createReducer(initialState, {
  [MODAL_CLOSE]: closeModal,
  [MODAL_OPEN]: openModal,
});
