// Creating new user

export const register = user => {
  $.ajax({
      url: 'api/users',
      method: 'POST',
      data: { user }
  })
}

// Logging in user

export const login = user => {
  $.ajax({
      url: 'api/session',
      method: 'POST',
      data: { user }
  })
}

// Logging out user

export const logout = () => {
  $.ajax({
      url: 'api/session',
      method: 'DELETE'
  })
};