import { createTableData } from "./createTableData"
import { v4 as uuidv4 } from 'uuid';

export const loadFromLocalStorage = () => {
  const localData = localStorage.getItem('tableData')

  if (!localData) {
    const data = [
      createTableData(uuidv4(),'Andemis Gmbh', 'Cert 1', '17.08.2022', '17.11.2022', '2022-08-17T12:49:52.926Z', '2022-11-17T12:49:52.926Z'),
      createTableData(uuidv4(),'Daimler AG', 'CCOO', '17.09.2022', '17.12.2022', '2022-09-17T12:49:52.926Z', '2022-12-17T12:49:52.926Z'),
      createTableData(uuidv4(),'Andemis Gmbh', 'DCCS', '17.10.2022', '17.11.2023', '2022-10-17T12:49:52.926Z', '2023-11-17T12:49:52.926Z'),
    ]

    saveDataToLocalStorage(data, 'tableData')
    return data
  }

  return JSON.parse(localData)
}

export const saveDataToLocalStorage = (data: any, key: any) => localStorage.setItem(key, JSON.stringify(data))