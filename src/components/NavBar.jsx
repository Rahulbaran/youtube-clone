import { Stack, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

/* icons */
import { logo } from "../data/Icons";

/* components */
import SearchBar from "./SearchBar";

export default function NavBar() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      component="header"
      p={2}
      sx={{ position: "sticky", top: 0 }}
    >
      <Link component={RouterLink} to="/">
        <img src={logo} alt="youtube clone" height={45} />
      </Link>

      <SearchBar />
    </Stack>
  );
}
