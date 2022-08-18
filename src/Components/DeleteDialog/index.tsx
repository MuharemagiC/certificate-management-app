import { FC } from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { IconButton, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import WarnningImg from '../../Assets/images/Warnning.svg'
import DeleteDialogStyle from './DeleteDialogStyle.module.css'
import { IDeleteDialogProps } from '../../Interfaces/IDeleteDialogProps';

const DeleteDialog: FC<IDeleteDialogProps> = ({ open, id, handleClose, deleteCertificate }) => {
  return (
    <Dialog open={open} sx={{ p: 3 }} onClose={handleClose}>
      <section className={DeleteDialogStyle["Dialog-Header"]}>
        <DialogTitle>Delete certificate</DialogTitle>
        <section>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </section>
      </section>

      <section className={DeleteDialogStyle["Dialog-Content"]}>
        <img src={WarnningImg} alt="warning" />
        <p className={DeleteDialogStyle["Dialog-Text"]}>Are you sure you want to delete the certificate?</p>
        <section className={DeleteDialogStyle["Dialog-Actions"]}>
          <Button variant="outlined" onClick={() => {
            deleteCertificate(id)
            handleClose()
          }}>Yes</Button>
          <Button variant="outlined" color="warning" onClick={handleClose}>No</Button>
        </section>
      </section>
    </Dialog>
  );
}

export default DeleteDialog;