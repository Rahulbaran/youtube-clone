import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

/* Pages */
import Feed from "./pages/Feed";
import VideoDetail from "./pages/VideoDetail";
import ChannelDetail from "./pages/ChannelDetail";
import SearchFeed from "./pages/SearchFeed";

/* Components */
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#222" }}>
        <NavBar />

        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTern" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}
