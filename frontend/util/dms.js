export const requestDms = () => (
  $.ajax({
    method: 'GET',
    url: `/api/dms`
  })
);

export const requestDm = dmId => (
  $.ajax({
    method: 'GET',
    url: `/api/dms/${dmId}`
  })
);

export const deleteDm = dmId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/dms/${dmId}`,
  })
);