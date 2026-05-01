import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 90 },

  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 180,
    valueGetter: (value, row) =>
      `${row.firstName || ""} ${row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 14 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 11 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const section = {
  borderTop: "2px solid #18181b",
  borderBottom: "2px solid #18181b",
  backgroundColor: "#fafafa",
  px: { xs: 2, sm: 3, md: 4 },
  py: 3,
};

const container = {
  maxWidth: 1100,
  mx: "auto",
  width: "100%",
};

const title = {
  fontSize: { xs: "1.35rem", md: "1.5rem" },
  fontWeight: 600,
  color: "#18181b",
  mb: 2.5,
};

const subtitle = {
  mt: 0.8,
  fontSize: "0.85rem",
  color: "#71717a",
  lineHeight: 1.6,
};

const card = {
  border: "2px solid #18181b",
  borderRadius: "24px",
  bgcolor: "#f4f4f5",
  p: 2,
};

export default function UsersPage() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%", gap: 3 }}>

      <Box sx={section}>
        <Box sx={container}>
          <Typography
            sx={{
              fontSize: { xs: "1.75rem", md: "1.9rem" },
              fontWeight: 700,
              color: "#18181b",
              lineHeight: 1.1,
            }}
          >
            Users
          </Typography>

          <Typography sx={subtitle}>
            Manage user records and directory information.
          </Typography>
        </Box>
      </Box>

      <Box sx={section}>
        <Box sx={container}>
          <Typography sx={title}>User Directory</Typography>

          <Paper elevation={0} sx={card}>
            <Box>
              <DataGrid
              autoHeight
                rows={rows}
                columns={columns}
                experimentalFeatures={{ newEditingApi: true }}
                initialState={{
                  pagination: {
                    paginationModel: { pageSize: 5 },
                  },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
                sx={{
                  border: "none",

                  // header styling
                  "& .MuiDataGrid-columnHeaders": {
                    backgroundColor: "#e4e4e7",
                  },

                  // row styling consistency
                  "& .MuiDataGrid-cell": {
                    borderBottom: "1px solid #e4e4e7",
                  },

                  // remove focus outlines clutter
                  "& .MuiDataGrid-cell:focus, & .MuiDataGrid-columnHeader:focus":
                    {
                      outline: "none",
                    },
                }}
              />
            </Box>
          </Paper>
        </Box>
      </Box>

    </Box>
  );
}