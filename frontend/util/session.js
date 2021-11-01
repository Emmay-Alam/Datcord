// Creating new user

export const postUser = user => {
  $.ajax({
      url: 'api/users',
      method: 'POST',
      data: { user }
  })
}

// Logging in user

export const postSession = user => {
  $.ajax({
      url: 'api/session',
      method: 'POST',
      data: { user }
  })
}

// Logging out user

export const deleteSession = () => {
  $.ajax({
      url: 'api/session',
      method: 'DELETE'
  })
};