import { useState, useCallback } from "react";

export const usePaginate = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = useCallback((event: unknown, newPage: number) => {
    setPage(newPage)
  }, []);

  const handleChangeRowsPerPage = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  }, []);

  return [page, rowsPerPage, handleChangePage, handleChangeRowsPerPage] as const;
}