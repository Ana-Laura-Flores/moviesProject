import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Box, InputBase } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import useMovies from "../customHooks/useMovies.js";
import ContainCards from "../components/ContainCards.jsx";


const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
export default function SearchMovie() {
  const [keywordSearch, setKeywordSearch] = useState("");
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;
  const [currentPage, setCurrentPage] = useState(1)
  const { getData, data, totalPages } = useMovies([]);

  

  useEffect(() => {
    getData(
      keywordSearch
        ? `https://api.themoviedb.org/3/search/movie?language=es-ES&page=${currentPage}&api_key=${apiKey}&query=${keywordSearch}`
        : `https://api.themoviedb.org/3/movie/now_playing?language=es-ES&api_key=${apiKey}`
    );
  }, [keywordSearch, currentPage]);

  const handleChangeInput = (e) => {
    setKeywordSearch(e.target.value);
  };

  return (
    <Box>
      <Box sx={{ flexGrow: 0, padding:3, backgroundColor: "#1e1e1e", color:"whitesmoke" }}>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            //onChange={handleChangeInput}
            onChange={(e) => setKeywordSearch (e.target.value)}
          />
        </Search>
       
      </Box>
      <Box>
        <ContainCards data={data.results} setCurrentPage={setCurrentPage} currentPage={currentPage} totalPages={totalPages}/>
      </Box>
    </Box>
  );
}
