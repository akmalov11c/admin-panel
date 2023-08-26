import React from "react";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../data";

import "./datatable.scss";
const DataTable = () => {
  const [data, setData] = React.useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test">
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="data__title">
        Add New User
        <Link to="/users/new" className="data__link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="data__grid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        // pageSize={3}
        // rowsPerPageOptions={[5]}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 8 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
