export const requestUser = userId => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${userId}`
  })
);