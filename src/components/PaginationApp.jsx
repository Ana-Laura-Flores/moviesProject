import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationApp({ setCurrentPage, currentPage }) {
  const handleChangePage = (e, page) => {
    setCurrentPage(page);
  };
  return (
    <Stack
      spacing={2}
      margin="30px"
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Pagination
        count={94}
        onChange={handleChangePage}
        page={currentPage}
        variant="outlined"
        shape="rounded"
      />
    </Stack>
  );
}
