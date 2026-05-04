import { useState } from "react";
import {
  Alert,
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  IconButton,
  InputAdornment,
  MenuItem,
  Paper,
  Stack,
  Switch,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { DataGrid } from "@mui/x-data-grid";
import usersSeed from "../../data/users.json?raw";

const roles = ["admin", "editor", "viewer"];
const genders = ["male", "female", "other"];

const section = {
  borderTop: "2px solid #18181b",
  borderBottom: "2px solid #18181b",
  backgroundColor: "#fafafa",
  px: { xs: 2, sm: 3, md: 4 },
  py: 3,
};

const container = {
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

const blankForm = {
  firstName: "",
  lastName: "",
  age: "",
  gender: "",
  contactNumber: "",
  email: "",
  role: "",
  username: "",
  password: "",
  address: "",
  isActive: true,
};

const labelize = (value) =>
  value ? `${value.charAt(0).toUpperCase()}${value.slice(1)}` : "";

const loadUsers = () => {
  try {
    return {
      users: JSON.parse(usersSeed).map((user, index) => ({
        id: Number(user.id) || index + 1,
        firstName: String(user.firstName ?? "").trim(),
        lastName: String(user.lastName ?? "").trim(),
        age: String(user.age ?? "").trim(),
        gender: genders.includes(
          String(user.gender ?? "").trim().toLowerCase()
        )
          ? String(user.gender ?? "").trim().toLowerCase()
          : "",
        contactNumber: String(user.contactNumber ?? "").trim(),
        email: String(user.email ?? "").trim().toLowerCase(),
        role: roles.includes(String(user.role ?? "").trim().toLowerCase())
          ? String(user.role ?? "").trim().toLowerCase()
          : "editor",
        username: String(user.username ?? "").trim().toLowerCase(),
        password: String(user.password ?? ""),
        address: String(user.address ?? "").trim(),
        isActive:
          typeof user.isActive === "boolean" ? user.isActive : true,
      })),
      error: "",
    };
  } catch {
    return {
      users: [],
      error: "Unable to read users from src/assets/users.json.",
    };
  }
};

const seed = loadUsers();

export default function UsersPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [users, setUsers] = useState(seed.users);
  const [modal, setModal] = useState({ open: false, id: null });
  const [form, setForm] = useState(blankForm);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const [search, setSearch] = useState("");
  const [filterRole, setFilterRole] = useState("");
  const [filterGender, setFilterGender] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  const resetForm = () => {
    setForm({ ...blankForm });
    setErrors({});
  };

  const openModal = (user) => {
    setModal({ open: true, id: user?.id ?? null });
    setForm(user ? { ...blankForm, ...user } : { ...blankForm });
    setErrors({});
  };

  const closeModal = () => {
    setModal({ open: false, id: null });
    setShowPassword(false);
    resetForm();
  };

  const handleChange = ({ target: { name, value, checked, type } }) => {
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const nextErrors = {};
    const email = form.email.trim().toLowerCase();
    const username = form.username.trim().toLowerCase();

    [
      ["firstName", "First name"],
      ["lastName", "Last name"],
      ["age", "Age"],
      ["gender", "Gender"],
      ["contactNumber", "Contact number"],
      ["email", "Email"],
      ["role", "Role"],
      ["username", "Username"],
      ["password", "Password"],
      ["address", "Address"],
    ].forEach(([key, label]) => {
      if (!String(form[key]).trim()) {
        nextErrors[key] = `${label} is required.`;
      }
    });

    if (
      !nextErrors.email &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (
      !nextErrors.email &&
      users.some(
        (user) => user.id !== modal.id && user.email === email
      )
    ) {
      nextErrors.email = "Email address already exists.";
    }

    if (
      !nextErrors.username &&
      users.some(
        (user) => user.id !== modal.id && user.username === username
      )
    ) {
      nextErrors.username = "Username already exists.";
    }

    if (!nextErrors.username && /\s/.test(form.username)) {
      nextErrors.username = "Username must not contain spaces.";
    }

    if (!nextErrors.password && form.password.length < 8) {
      nextErrors.password =
        "Password must be at least 8 characters.";
    }

    if (
      !nextErrors.contactNumber &&
      !/^\d{11}$/.test(form.contactNumber)
    ) {
      nextErrors.contactNumber =
        "Contact number must be exactly 11 digits.";
    }

    if (!nextErrors.age && !/^\d+$/.test(form.age)) {
      nextErrors.age = "Age must contain numbers only.";
    }

    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    const nextUser = {
      firstName: form.firstName.trim(),
      lastName: form.lastName.trim(),
      age: form.age.trim(),
      gender: form.gender.trim().toLowerCase(),
      contactNumber: form.contactNumber.trim(),
      email: form.email.trim().toLowerCase(),
      role: form.role.trim().toLowerCase(),
      username: form.username.trim().toLowerCase(),
      password: form.password,
      address: form.address.trim(),
      isActive: form.isActive,
    };

    setUsers((prev) =>
      modal.id
        ? prev.map((user) =>
            user.id === modal.id ? { ...user, ...nextUser } : user
          )
        : [
            ...prev,
            {
              id:
                prev.reduce(
                  (max, user) => Math.max(max, Number(user.id) || 0),
                  0
                ) + 1,
              ...nextUser,
            },
          ]
    );

    closeModal();
  };

  const toggleStatus = (id) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id
          ? { ...user, isActive: !user.isActive }
          : user
      )
    );
  };

  const fieldProps = (name, label, extra = {}) => ({
    name,
    label,
    value: form[name],
    onChange: handleChange,
    error: Boolean(errors[name]),
    helperText: errors[name],
    fullWidth: true,
    size: "small",
    ...extra,
  });

  const filteredUsers = users.filter((u) => {
    const matchesSearch =
      `${u.firstName} ${u.lastName} ${u.email} ${u.username}`
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesRole = filterRole ? u.role === filterRole : true;
    const matchesGender = filterGender ? u.gender === filterGender : true;
    const matchesStatus =
      filterStatus === ""
        ? true
        : filterStatus === "active"
        ? u.isActive
        : !u.isActive;

    return matchesSearch && matchesRole && matchesGender && matchesStatus;
  });
  
  const columns = [
    { field: "id", headerName: "ID", flex: 0.35, minWidth: 55 },

    {
      field: "fullName",
      headerName: "Full Name",
      flex: 0.9,
      minWidth: 120,
      valueGetter: (_, row) =>
        `${row.firstName} ${row.lastName}`.trim(),
    },

    { field: "username", headerName: "Username", flex: 0.7, minWidth: 90 },
    { field: "age", headerName: "Age", flex: 0.35, minWidth: 55 },

    {
      field: "gender",
      headerName: "Gender",
      flex: 0.5,
      minWidth: 75,
      valueGetter: (_, row) => labelize(row.gender),
    },

    {
      field: "contactNumber",
      headerName: "Contact Number",
      flex: 0.8,
      minWidth: 100,
    },

    {
      field: "email",
      headerName: "Email",
      flex: 1.2,
      minWidth: 150,
    },

    {
      field: "role",
      headerName: "Role",
      flex: 0.5,
      minWidth: 75,
      valueGetter: (_, row) => labelize(row.role),
    },

    {
      field: "status",
      headerName: "Status",
      flex: 0.6,
      minWidth: 95,
      sortable: false,
      renderCell: ({ row }) => (
        <Chip
          size="small"
          label={row.isActive ? "Active" : "Inactive"}
          color={row.isActive ? "success" : "default"}
          variant={row.isActive ? "filled" : "outlined"}
        />
      ),
    },

    {
      field: "actions",
      headerName: "Actions",
      flex: 0.9,
      minWidth: 145,
      sortable: false,
      filterable: false,
      renderCell: ({ row }) => (
        <Stack direction="row" spacing={0.5}>
          <Button
            size="small"
            variant="outlined"
            sx={{ minWidth: 50, px: 1 }}
            onClick={() => openModal(row)}
          >
            Edit
          </Button>

          <Button
            size="small"
            variant="contained"
            sx={{ minWidth: 60, px: 1 }}
            color={row.isActive ? "warning" : "success"}
            onClick={() => toggleStatus(row.id)}
          >
            {row.isActive ? "Disable" : "Activate"}
          </Button>
        </Stack>
      ),
    },
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
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

          <Button
            variant="contained"
            onClick={() => openModal()}
            sx={{ backgroundColor: "#18181b", mt: 3 }}
          >
            Add User
          </Button>
        </Box>
      </Box>

      <Box sx={section}>
        <Box sx={container}>
          <Typography sx={title}>User Directory</Typography>

          {seed.error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {seed.error}
            </Alert>
          )}

          {/* 🔍 SEARCH + FILTER UI */}
          <Stack spacing={2} sx={{ mt: 3, pb: 3}}>
            <TextField
              size="small"
              label="Search users"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              fullWidth
            />

            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <TextField
                select
                size="small"
                label="Role"
                value={filterRole}
                onChange={(e) => setFilterRole(e.target.value)}
                fullWidth
              >
                <MenuItem value="">All</MenuItem>
                {roles.map((r) => (
                  <MenuItem key={r} value={r}>
                    {labelize(r)}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                select
                size="small"
                label="Gender"
                value={filterGender}
                onChange={(e) => setFilterGender(e.target.value)}
                fullWidth
              >
                <MenuItem value="">All</MenuItem>
                {genders.map((g) => (
                  <MenuItem key={g} value={g}>
                    {labelize(g)}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                select
                size="small"
                label="Status"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                fullWidth
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="active">Active</MenuItem>
                <MenuItem value="inactive">Inactive</MenuItem>
              </TextField>
            </Stack>
          </Stack>

          <Paper elevation={0} sx={card}>
            {users.length ? (
              <DataGrid
                autoHeight
                rows={filteredUsers}
                columns={columns}
                disableRowSelectionOnClick
                pageSizeOptions={[5, 10]}
                columnBuffer={10}
                initialState={{
                  pagination: {
                    paginationModel: { pageSize: 5, page: 0 },
                  },
                }}
                sx={{
                  border: "none",
                  fontSize: "0.78rem",

                  "& .MuiDataGrid-columnHeaders": {
                    backgroundColor: "#e4e4e7",
                  },

                  "& .MuiDataGrid-cell": {
                    borderBottom: "1px solid #e4e4e7",
                  },

                  "& .MuiDataGrid-cell:focus, & .MuiDataGrid-columnHeader:focus":
                    {
                      outline: "none",
                    },
                }}
              />
            ) : (
              <Alert severity="info">
                No users found. Use Add User to create your first record.
              </Alert>
            )}
          </Paper>
        </Box>
      </Box>

      <Dialog
        open={modal.open}
        onClose={closeModal}
        fullWidth
        fullScreen={isMobile}
        maxWidth="md"
        PaperProps={{
          sx: {
            borderRadius: "24px",
            border: "2px solid #18181b",
            bgcolor: "#fafafa",
          },
        }}
      >
        <Box component="form" onSubmit={handleSubmit}>
          <DialogTitle sx={{ fontWeight: 700 }}>
            {modal.id ? "Edit User" : "Add User"}
          </DialogTitle>

          <DialogContent dividers sx={{ px: { xs: 2, sm: 3 } }}>
            <Stack spacing={2} sx={{ pt: 1 }}>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <TextField {...fieldProps("firstName", "First name")} />
                <TextField {...fieldProps("lastName", "Last name")} />
              </Stack>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <TextField {...fieldProps("age", "Age")} />
                <TextField {...fieldProps("gender", "Gender", { select: true })}>
                  {genders.map((gender) => (
                    <MenuItem key={gender} value={gender}>
                      {labelize(gender)}
                    </MenuItem>
                  ))}
                </TextField>
              </Stack>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <TextField
                  {...fieldProps("contactNumber", "Contact Number")}
                />
                <TextField
                  {...fieldProps("email", "Email Address", {
                    type: "email",
                  })}
                />
              </Stack>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <TextField {...fieldProps("role", "Role", { select: true })}>
                  {roles.map((role) => (
                    <MenuItem key={role} value={role}>
                      {labelize(role)}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField {...fieldProps("username", "Username")} />
              </Stack>

              <TextField
                {...fieldProps("password", "Password", {
                  type: showPassword ? "text" : "password",
                  slotProps: {
                    input: {
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            edge="end"
                            onClick={() =>
                              setShowPassword((prev) => !prev)
                            }
                            onMouseDown={(event) =>
                              event.preventDefault()
                            }
                          >
                            {showPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    },
                  },
                })}
              />

              <TextField
                {...fieldProps("address", "Address", {
                  multiline: true,
                  rows: 3,
                })}
              />

              <FormControlLabel
                control={
                  <Switch
                    name="isActive"
                    checked={form.isActive}
                    onChange={handleChange}
                    sx={{
                      "& .MuiSwitch-switchBase.Mui-checked": {
                        color: "#18181b",
                      },
                      "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                        backgroundColor: "#18181b",
                      },
                    }}
                  />
                }
                label={
                  form.isActive
                    ? "User status: Active"
                    : "User status: Inactive"
                }
              />
            </Stack>
          </DialogContent>

          <DialogActions sx={{ px: 3, py: 2 }}>
            <Button sx={{ color: "#18181b"}} onClick={closeModal}>Cancel</Button>
            <Button type="submit" variant="contained" sx={{ backgroundColor: "#18181b" }}>
              {modal.id ? "Update User" : "Save User"}
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </Box>
  );
}