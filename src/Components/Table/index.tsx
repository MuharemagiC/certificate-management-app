import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

import StyledTableCell from './StyledTableCell'
import { usePaginate } from '../../hooks/usePaginate';
import { useTableData } from '../../hooks/useTableData';
import { columns } from '../../Constants/globals';
import { useNavigation } from '../../hooks/useNavigation';
import { useDialog } from '../../hooks/useDialog';
import DeleteDialog from '../DeleteDialog';

export default function CertificateTable() {
  const [page, rowsPerPage, handleChangePage, handleChangeRowsPerPage] = usePaginate()
  const [handleNavigation] = useNavigation()
  const [open, handleOpen, id] = useDialog()
  const { rows, deleteCertificate } = useTableData(undefined)


  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <StyledTableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row: any) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={uuidv4()}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      if (column.id === 'actions') {
                        return (
                          <TableCell key={column.id} align={column.align}>
                            <IconButton onClick={() => handleNavigation(`${row.id}`)}><EditIcon /></IconButton>
                            <IconButton onClick={() => handleOpen(row.id)}><DeleteIcon /></IconButton>
                          </TableCell>
                        )
                      }
                      return (
                        <TableCell key={uuidv4()} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <DeleteDialog open={open} id={id} handleClose={handleOpen} deleteCertificate={deleteCertificate}/>
    </Paper>
  );
}