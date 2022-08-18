import { ITableData } from "../Interfaces/ITableData";

export function createTableData(
  id: string,
  supplier: string,
  certificateType: string,
  validFrom: string,
  validTo: string,
  rawValidFrom: string,
  rawValidTo: string
): ITableData {
  return { id, supplier, certificateType, validFrom, validTo, rawValidFrom, rawValidTo };
}