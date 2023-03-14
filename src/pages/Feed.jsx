// import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";

import SideBar from "../components/SideBar";
import Videos from "../components/Videos";

export default function Feed() {
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "88vh" },
          borderRight: "1px solid white",
          px: { sm: 0, md: 2 }
        }}
      >
        <SideBar />
        <Typography
          variant="body2"
          color="rgb(255,255,255)"
          fontFamily="inherit"
          fontSize="1.1rem"
          mt={1}
        >
          Copyright {new Date().getFullYear()} Rahulbaran
        </Typography>
      </Box>

      <Box p={2} sx={{ height: "90vh", overflowY: "auto", flex: 2 }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", mb: "1em", color: "white" }}
        >
          New <span style={{ color: "red" }}>videos</span>
        </Typography>

        <Videos />
      </Box>
    </Stack>
  );
}
