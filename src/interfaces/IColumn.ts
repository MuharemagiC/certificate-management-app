export interface IColumn {
  id: 'supplier' | 'certificateType' | 'validFrom' | 'validTo' | 'actions' | 'supplierName' | 'supplierIndex' | 'city';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}