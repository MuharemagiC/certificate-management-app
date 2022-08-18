export interface IDeleteDialogProps {
  open: boolean;
  id: string | undefined;
  handleClose: () => void;
  deleteCertificate: (id: string | undefined) => void
}