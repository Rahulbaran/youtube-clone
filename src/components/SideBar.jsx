import { Stack } from "@mui/material";

import { categories } from "../data/Icons";

const selectedCategory = "New";

export default function SideBar() {
  return (
    <Stack
      direction="row"
      sx={{
        overflow: "auto",
        flexDirection: { md: "column" },
        height: { sx: "auto", md: "95%" }
      }}
    >
      {categories.map(cat => (
        <button
          className="category-btn"
          key={cat.name}
          style={{
            fontFamily: "inherit",
            color: "white",
            backgroundColor: cat.name === selectedCategory && "#FC1503"
          }}
        >
          <span>{cat.icon}</span>
          <span>{cat.name}</span>
        </button>
      ))}
    </Stack>
  );
}
