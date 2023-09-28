import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
export default function PaginationApp({
  setCurrentPage,
  currentPage,
  totalPages,
}) {
  const handleChangePage = (e, page) => {
    setCurrentPage(page);
  };
  const PagesPersonal = styled(Pagination)(({ theme }) => ({
    color: "whitesmoke",
  }));
  return (
    <Stack
      spacing={2}
      margin="30px"
      className=".pagination"
      sx={{
        display: "flex",
        color: "whitesmoke",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <PagesPersonal
        count={totalPages > 500 ? 500 : totalPages}
        onChange={handleChangePage}
        page={currentPage}
        color="secondary"
        variant="text"
        shape="rounded"
        className=".pagination"
      />
    </Stack>
  );
}
