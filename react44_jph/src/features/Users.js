import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'actions', headerName: 'Actions', width: 130 }
];

const rows = [
  { id: 1, firstName: 'Jon', actions: 'icon' },
  { id: 2, firstName: 'Cersei', actions: 'icon' },
  { id: 3, firstName: 'Jaime', actions: 'icon' },
  { id: 4, firstName: 'Arya', actions: 'icon' },
  { id: 5, firstName: 'Daenerys', actions: 'icon' },
  { id: 6, firstName: 'Jaime', actions: 'icon' },
  { id: 7, firstName: 'Ferrara', actions: 'icon' },
  { id: 8, firstName: 'Rossini', actions: 'icon' },
  { id: 9, firstName: 'Harvey', actions: 'icon' }
];

function Users() {
  return (
    <>
      <div style={{ height: '100%', width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 }
            }
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </>
  );
}
export { Users as Component };
export default Users;
