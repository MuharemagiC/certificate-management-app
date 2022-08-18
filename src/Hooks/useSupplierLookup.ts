import { ChangeEvent, useCallback, useState } from "react";

import { suppliers } from "../Constants/globals";

export const useSupplierLookup = () => {
  const [rows, setRows] = useState<any>([])
  const [supplierName, setSupplierName] = useState<string | undefined>("")
  const [supplierIndex, setSupplierIndex] = useState<string | undefined>("")
  const [city, setCity] = useState<string | undefined>("")
  const [selected, setSelected] = useState<string | undefined>('')

  const handleChangeSupplierName = useCallback((event: ChangeEvent<HTMLInputElement>) => setSupplierName(event.target.value), [])

  const handleChangeSupplierIndex = useCallback((event: ChangeEvent<HTMLInputElement>) => setSupplierIndex(event.target.value), [])

  const handleChangeCity = useCallback((event: ChangeEvent<HTMLInputElement>) => setCity(event.target.value), [])

  const handleSelected = useCallback((value: string) => setSelected(value), [])

  const reset = useCallback(() => {
    setSupplierName("")
    setSupplierIndex("")
    setCity("")
    setRows([])
  }, [])

  const search = useCallback(() => {
    const searchCriteria = [city?.toLowerCase(), supplierName?.toLocaleLowerCase(), supplierIndex?.toLocaleLowerCase()]
    const filteredCriteria = searchCriteria.filter(Boolean)

    const foundedSupplier = suppliers.filter((item: any) => {
      const lowercaseSuppliers = Object.values(item).map((value: any) => value.toLowerCase())
      
      return filteredCriteria.every(i => lowercaseSuppliers.includes(i))
    })

    setRows(foundedSupplier)
  }, [city, supplierName, supplierIndex])

  return [
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
  ] as const
}