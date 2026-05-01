import React, { useState } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";

import {
  Box,
  Typography,
  IconButton,
  Button,
  InputBase,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import SearchIcon from "@mui/icons-material/Search";

import DashboardIcon from "@mui/icons-material/Dashboard";
import AssessmentIcon from "@mui/icons-material/Assessment";
import PeopleIcon from "@mui/icons-material/People";

import logo from "../assets/cookingWithBenLogo.png";

const links = [
  {
    label: "Dashboard",
    to: "/dashboard",
    icon: DashboardIcon,
  },
  {
    label: "Reports",
    to: "/dashboard/reports",
    icon: AssessmentIcon,
  },
  {
    label: "Users",
    to: "/dashboard/users",
    icon: PeopleIcon,
  },
];

export default function DashLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#fafafa" }}>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          borderBottom: "1px solid #e4e4e7",
          bgcolor: "#ffffff",
          backdropFilter: "blur(8px)",
        }}
      >
        <Box
          sx={{
            px: { xs: 2, sm: 3, md: 4 },
            py: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <IconButton
              onClick={() => setSidebarOpen(!sidebarOpen)}
              sx={{
                border: "2px solid transparent",
                transition: "0.2s",
                "&:hover": {
                  borderColor: "#18181b",
                  bgcolor: "transparent",
                },
              }}
            >
              {sidebarOpen ? <MenuOpenIcon /> : <MenuIcon />}
            </IconButton>

            <NavLink
              to="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                textDecoration: "none",
              }}
            >
              <img
                src={logo}
                alt="Logo"
                style={{ height: 40 }}
              />

              <Typography
                sx={{
                  fontSize: "1.25rem",
                  fontWeight: 500,
                  color: "#18181b",
                }}
              >
                Cooking BEN
              </Typography>
            </NavLink>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                border: "2px solid #e4e4e7",
                borderRadius: "999px",
                bgcolor: "#fafafa",
                px: 1.75,
                py: 0.4,
              }}
            >
              <SearchIcon sx={{ color: "#71717a", fontSize: 18 }} />

              <InputBase
                placeholder="Search..."
                sx={{
                  ml: 1,
                  fontSize: "0.875rem",
                }}
              />
            </Box>

            <Button
              onClick={() => navigate("/")}
              variant="outlined"
              sx={{
                borderRadius: "999px",
                borderWidth: "2px",
                px: 1.8,
                py: 0.9,
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: "#18181b",
                borderColor: "#18181b",
                "&:hover": {
                  borderColor: "#18181b",
                  bgcolor: "#fafafa",
                },
              }}
            >
              Logout
            </Button>
          </Box>
        </Box>
      </Box>

      <Box sx={{ display: "flex", pt: "82px" }}>
        <Box
          sx={{
            position: "sticky",
            top: "82px",
            height: "calc(100vh - 82px)",
            borderRight: "1px solid #e4e4e7",
            bgcolor: "#ffffff",
            transition: "all 0.3s ease",
            width: sidebarOpen ? 256 : 80,
            px: sidebarOpen ? 2 : 1.5,
            py: 3,
            flexShrink: 0,
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
            {links.map((link) => {
              const Icon = link.icon;

              return (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/dashboard"}
                  style={{ textDecoration: "none" }}
                >
                  {({ isActive }) => (
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: sidebarOpen
                          ? "flex-start"
                          : "center",
                        gap: sidebarOpen ? 1.5 : 0,
                        borderRadius: "999px",
                        border: "2px solid",
                        borderColor: isActive
                          ? "#18181b"
                          : "transparent",
                        bgcolor: isActive ? "#18181b" : "transparent",
                        color: isActive ? "#fafafa" : "#71717a",
                        px: 2,
                        py: 1.5,
                        fontSize: "11px",
                        fontWeight: 700,
                        letterSpacing: "0.24em",
                        textTransform: "uppercase",
                        transition: "0.2s",
                        "&:hover": {
                          borderColor: "#18181b",
                          bgcolor: isActive ? "#18181b" : "#fafafa",
                          color: isActive ? "#fafafa" : "#18181b",
                        },
                      }}
                    >
                      <Icon fontSize="small" />

                      {sidebarOpen && <span>{link.label}</span>}
                    </Box>
                  )}
                </NavLink>
              );
            })}
          </Box>
        </Box>

        <Box
          component="main"
          sx={{
            flex: 1,
            minWidth: 0,
            overflowX: "hidden",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}