import { useCallback, useState } from "react";

export const useDialog = () => {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState<string | undefined>('')

  const handleOpen = useCallback((id?: string | undefined) => {
    setId(id)
    setOpen(prevState => !prevState)
  }, [])

  return [ open, handleOpen, id ] as const
}