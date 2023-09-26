import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationApp({ setCurrentPage, currentPage, totalPages }) {
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
        count={(totalPages > 500) ? 500 : totalPages}
        onChange={handleChangePage}
        page={currentPage}
        variant="outlined"
        shape="rounded"
      />
    </Stack>
  );
}
