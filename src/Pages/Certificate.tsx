
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { Button, CardActions, IconButton } from '@mui/material';
import { useParams } from 'react-router-dom';

import { useTableData } from '../hooks/useTableData';
import { Certificates } from '../Constants/globals';
import { useNavigation } from '../hooks/useNavigation';
import { useDialog } from '../hooks/useDialog';
import SupplierLookupDialog from '../Components/SupplierLookupDialog';

const Certificate = () => {
  const { id } = useParams()

  const {
    supplier,
    certificateType,
    validFrom,
    validTo,
    handleCertificateType,
    handleChangeSupplier,
    handleValidFrom,
    handleValidTo,
    addCertificate,
    isEdit,
    editCertificate,
    isButtonDisabled
  } = useTableData(id)

  const [handleNavigation] = useNavigation()
  const [open, handleOpen] = useDialog()

  return (
    <Card sx={{ minHeight: '50vh', padding: '30px' }}>
      <CardHeader title={isEdit() ? "Edit certificate" : "New Certificate"} action={
        <Button style={{ marginRight: '7px' }} variant="outlined" onClick={() => handleNavigation('/example1')}>Back</Button>
      } />
      <CardContent>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <TextField
            id="outlined-basic"
            label="Supplier"
            variant="outlined"
            style={{ width: "50%", marginRight: '8px' }}
            InputProps={{
              endAdornment: <>
                <IconButton onClick={() => handleOpen(undefined)}><SearchIcon /></IconButton>
                <IconButton onClick={() => handleChangeSupplier('')}><CloseIcon /></IconButton>
              </>
            }}
            value={supplier}
            disabled
          />
          <Autocomplete
            disablePortal
            style={{ width: "50%" }}
            id="combo-box-demo"
            options={Certificates}
            sx={{ width: 300 }}
            value={certificateType}
            onChange={handleCertificateType}
            renderInput={(params) => <TextField {...params} label="Certificate type" />}
          />
        </Box>
      </CardContent>
      <CardContent style={{ display: 'flex' }}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DesktopDatePicker
            label="Validate from"
            inputFormat="dd.MM.yyyy"
            value={validFrom}
            onChange={handleValidFrom}
            renderInput={(params) => <TextField {...params} style={{ width: "50%", marginRight: '8px' }} />}
          />

          <DesktopDatePicker
            label="Validate to"
            inputFormat="dd.MM.yyyy"
            value={validTo}
            onChange={handleValidTo}
            renderInput={(params) => <TextField {...params} style={{ width: "50%" }} />}
          />
        </LocalizationProvider>
      </CardContent>
      <CardActions style={{ display: 'flex', justifyContent: 'flex-end', padding: '17px' }}>
        <Button
          onClick={isEdit() ? editCertificate : addCertificate}
          variant="outlined"
          disabled={isButtonDisabled()}
        >
            { isEdit() ? 'Edit certificate' : 'Add Certificate' }
        </Button>
      </CardActions>
      <SupplierLookupDialog open={open} handleClose={handleOpen} handleChange={handleChangeSupplier}/>
    </Card>
  )
}

export default Certificate;