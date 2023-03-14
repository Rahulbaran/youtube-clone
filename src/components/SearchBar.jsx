import { useState } from "react";
import { Paper, IconButton } from "@mui/material";
import { redirect } from "react-router-dom";
import { Search as SearchIcon } from "@mui/icons-material";

export default function SearchBar() {
  return (
    <Paper
      component="form"
      onSubmit={() => {}}
      sx={{
        borderRadius: 20,
        border: "1px solid #3f3f3f",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 }
      }}
    >
      <input
        type="search"
        className="search-bar"
        placeholder="Search..."
        name="search"
        value=""
        onChange={() => {}}
      />

      <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
