import { useState, useCallback, useEffect, useRef } from "react";
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

import { Certificates } from "../Constants/globals";
import { loadFromLocalStorage, saveDataToLocalStorage } from "../utils/localStorage";
import { useNavigation } from "./useNavigation";

export const useTableData = (id: string | undefined) => {
  const firstRenderRef = useRef(true);
  const [rows, setRows] = useState<any>([]);
  const [supplier, setSupplier] = useState<string | undefined>('');
  const [certificateType, setCertificateType] = useState<{label: string } | null >(Certificates[0])
  const [validFrom, setValidFrom] = useState<Date | null>(new Date())
  const [validTo, setValidTo] = useState<Date | null>(new Date())
  const [handleNavigation] = useNavigation()

  const handleChangeSupplier = useCallback((value: string | undefined) => setSupplier(value), [])

  const handleCertificateType = useCallback((event: any, value: { label: string } | null) => setCertificateType(value), [])

  const handleValidFrom = useCallback((value: Date | null) => setValidFrom(value), [])

  const handleValidTo = useCallback((value: Date | null) => setValidTo(value), [])

  const addCertificate = useCallback(() => {
    const certificate = {
      id: uuidv4(),
      supplier,
      certificateType: certificateType?.label,
      validFrom: moment(validFrom).format('DD.MM.yyyy'),
      rawValidFrom: validFrom,
      rawValidTo: validTo,
      validTo: moment(validTo).format('DD.MM.yyyy')
    }

    setRows([...rows, certificate])
    saveDataToLocalStorage([...rows, certificate], 'tableData')
    handleNavigation('/example1')
  }, [rows, validFrom, validTo, supplier, certificateType, handleNavigation])

  const editCertificate = useCallback(() => {
    const certificate = {
      id: id,
      supplier,
      certificateType: certificateType?.label,
      validFrom: moment(validFrom).format('DD.MM.yyyy'),
      rawValidFrom: validFrom,
      rawValidTo: validTo,
      validTo: moment(validTo).format('DD.MM.yyyy')
    }

    const index = rows.findIndex((item: any) => item.id === id)
    const editedData = rows.filter((item: any) => item.id !== id)
    
    editedData.splice(index, 0, certificate)

    setRows([...editedData])
    saveDataToLocalStorage([...editedData], 'tableData')
    handleNavigation('/example1')
  }, [rows, validFrom, validTo, handleNavigation, supplier, certificateType, id])

  const deleteCertificate = useCallback((id: string | undefined) => {
    const notDeletedData = rows.filter((item: any )=> item.id !== id)

    setRows(notDeletedData)
    saveDataToLocalStorage(notDeletedData, 'tableData')
  }, [rows])

  const isEdit = useCallback(() => id ? true : false, [id])
  
  const isButtonDisabled = useCallback(() => {
    return !supplier || !certificateType || !validFrom || !validTo
  }, [supplier, certificateType, validFrom, validTo])
 
  useEffect(() => {
    if(firstRenderRef.current){
      const data = loadFromLocalStorage()
      setRows(data)

      if (id) {
        const foundedData = data.find((item: any) => item.id === id)
        setSupplier(foundedData.supplier)
        setCertificateType({ label: foundedData.certificateType })
        setValidFrom(foundedData.rawValidFrom)
        setValidTo(foundedData.rawValidTo)
      }
      firstRenderRef.current = false;
    }
  },[id])

  return {
    rows,
    supplier,
    certificateType,
    validFrom,
    validTo,
    handleCertificateType,
    handleChangeSupplier,
    handleValidFrom,
    handleValidTo,
    addCertificate,
    deleteCertificate,
    isEdit,
    editCertificate,
    isButtonDisabled
  } as const
}