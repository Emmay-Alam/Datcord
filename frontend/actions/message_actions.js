export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';

export const receiveMessages = (messages) => ({
  type: RECEIVE_MESSAGES,
  messages
})

export const receiveMessage = (message) => ({
  type: RECEIVE_MESSAGE,
  message
});

export const removeMessage = (message) => ({
  type: REMOVE_MESSAGE,
  message
});