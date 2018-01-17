import * as types from './actionTypes';

function addFlashNotification(message, level) {
  return {
    type: types.ADD_FLASH_NOTIFICATION,
    message,
    level
  };
}

export { addFlashNotification }
