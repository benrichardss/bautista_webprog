import React from "react";
import { Box, Typography, Paper } from "@mui/material";

import { BarChart } from "@mui/x-charts/BarChart";
import { PieChart } from "@mui/x-charts/PieChart";
import { Gauge } from "@mui/x-charts/Gauge";

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

const card = {
  border: "2px solid #18181b",
  borderRadius: "24px",
  bgcolor: "#f4f4f5",
  p: 2,
};

const label = {
  mt: 1.5,
  fontSize: "11px",
  fontWeight: 700,
  letterSpacing: "0.24em",
  textTransform: "uppercase",
  color: "#71717a",
};

export default function ReportsPage() {
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
            Reports
          </Typography>

          <Typography
            sx={{
              mt: 0.8,
              fontSize: "0.85rem",
              color: "#71717a",
              lineHeight: 1.6,
            }}
          >
            Performance trends, analytics, and system insights.
          </Typography>
        </Box>
      </Box>

      <Box sx={section}>
        <Box sx={container}>
          <Typography sx={title}>Performance Metrics</Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
              },
              gap: 2.5,
            }}
          >

            <Paper elevation={0} sx={card}>
              <Box
                sx={{
                  height: 160,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Gauge width={120} height={80} value={78} />
              </Box>
              <Typography sx={label}>System Health</Typography>
            </Paper>

            <Paper elevation={0} sx={card}>
              <Box
                sx={{
                  height: 160,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Gauge width={120} height={80} value={64} />
              </Box>
              <Typography sx={label}>Conversion Rate</Typography>
            </Paper>

            <Paper elevation={0} sx={card}>
              <Box
                sx={{
                  height: 160,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Gauge width={120} height={80} value={92} />
              </Box>
              <Typography sx={label}>Completion Rate</Typography>
            </Paper>

          </Box>
        </Box>
      </Box>

      <Box sx={section}>
        <Box sx={container}>
          <Typography sx={title}>Quarterly Analytics</Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "repeat(2, 1fr)",
              },
              gap: 2.5,
            }}
          >

            <Paper elevation={0} sx={card}>
              <Box
                sx={{
                  height: 300,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden",
                }}
              >
                <BarChart
                  height={260}
                  series={[
                    { data: [35, 44, 24, 34], label: "Series 1" },
                    { data: [51, 6, 49, 30], label: "Series 2" },
                  ]}
                  xAxis={[
                    {
                      data: ["Q1", "Q2", "Q3", "Q4"],
                      scaleType: "band",
                      label: "Quarters",
                    },
                  ]}
                />
              </Box>
            </Paper>

            <Paper elevation={0} sx={card}>
              <Box
                sx={{
                  height: 300,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden",
                }}
              >
                <PieChart
                  height={220}
                  series={[
                    {
                      data: [
                        { id: 0, value: 10, label: "series A" },
                        { id: 1, value: 15, label: "series B" },
                        { id: 2, value: 20, label: "series C" },
                      ],
                    },
                  ]}
                />
              </Box>
            </Paper>

          </Box>
        </Box>
      </Box>

    </Box>
  );
}