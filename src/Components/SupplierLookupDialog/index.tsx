import { FC } from 'react';
import { IconButton, Button } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Radio from '@mui/material/Radio';

import SupplierLookupDialogStyle from './SupplierLookupDialogStyle.module.css'
import { usePaginate } from '../../hooks/usePaginate';
import { useSupplierLookup } from '../../hooks/useSupplierLookup';
import { supplierLookupColumns } from '../../Constants/globals';
import { ISupplierLookupDialogProps } from '../../interfaces/ISupplierLookupDialogProps';

const SupplierLookupDialog: FC<ISupplierLookupDialogProps> = ({ open, handleClose, handleChange }) => {
  const [page, rowsPerPage, handleChangePage, handleChangeRowsPerPage] = usePaginate()
  const [
    rows,
    selected,
    handleSelected,
    supplierName,
    supplierIndex,
    city,
    handleChangeSupplierName,
    handleChangeSupplierIndex,
    handleChangeCity,
    reset,
    search
  ] = useSupplierLookup()

  return (
    <Dialog open={open} sx={{ p: 3 }} onClose={() => {
      handleClose()
      reset()
    }}>
      <section className={SupplierLookupDialogStyle["Dialog-Header"]}>
        <DialogTitle>Search for suppliers</DialogTitle>
        <section>
          <IconButton onClick={() => {
            handleClose()
            reset()
          }}>
            <CloseIcon />
          </IconButton>
        </section>
      </section>

      <section className={SupplierLookupDialogStyle["Dialog-Content"]}>
        <section style={{ border: '1px solid #39393A' }}>
          <h1 className={SupplierLookupDialogStyle["Dialog-Text"]}>Supplier criteria</h1>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            style={{ display: 'flex', justifyContent: 'center', padding: '5px' }}
          >
            <TextField
              id="outlined-basic"
              label="Supplier name"
              variant="outlined"
              value={supplierName}
              onChange={handleChangeSupplierName}
              style={{ marginRight: '8px' }}
            />
            <TextField
              id="outlined-basic"
              label="Supplier index"
              variant="outlined"
              value={supplierIndex}
              onChange={handleChangeSupplierIndex}
              style={{ marginRight: '8px' }}
            />
            <TextField
              id="outlined-basic"
              label="City"
              variant="outlined"
              value={city}
              onChange={handleChangeCity}
              style={{ marginRight: '8px' }}
            />
          </Box>
          <section className={SupplierLookupDialogStyle["Dialog-Actions"]}>
            <Button variant="outlined" onClick={search}>Search</Button>
            <Button variant="outlined" color="info" onClick={reset}>Reset</Button>
          </section>
        </section>

        <section style={{ border: '1px solid #39393A', marginTop: '10px' }}>
          <h1 className={SupplierLookupDialogStyle["Dialog-Text"]}>Supplier list</h1>
          <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {supplierLookupColumns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row: any) => {
                      return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={uuidv4()}>
                          {supplierLookupColumns.map((column) => {
                            const value = row[column.id];

                            if (column.id === 'actions') {
                              return (
                                <TableCell key={uuidv4()}>
                                  <Radio
                                    checked={selected === row.supplierName}
                                    value={row.supplierName}
                                    onChange={(e: any) => handleSelected(e.target.value)}
                                    name="radio-buttons"
                                    inputProps={{ 'aria-label': 'A' }}
                                  />
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
          </Paper>
        </section>
        <section className={SupplierLookupDialogStyle["Dialog-Actions"]}>
          <Button variant="outlined" onClick={() => {
            handleChange(selected)
            handleClose()
            reset()
          }}>Select</Button>
          <Button variant="outlined" onClick={() => {
            reset()
            handleClose()
          }}>Cancel</Button>
        </section>
      </section>
    </Dialog>
  );
}

export default SupplierLookupDialog;