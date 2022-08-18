export interface ISupplierLookupDialogProps {
  open: boolean;
  handleChange: (value: string | undefined) => void,
  handleClose: () => void;
}