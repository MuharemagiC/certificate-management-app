import { IColumn } from '../Interfaces/IColumn'


export const columns: readonly IColumn[] = [
  { id: 'supplier', label: 'Supplier', minWidth: 150 },
  { id: 'certificateType', label: 'Certificate Type', minWidth: 100 },
  {
    id: 'validFrom',
    label: 'Valid from',
    minWidth: 150,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'validTo',
    label: 'Valid to',
    minWidth: 150,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'actions',
    label: 'Actions',
    minWidth: 150,
    align: 'right'
  }
];

export const supplierLookupColumns: readonly IColumn[] = [
  {
    id: 'actions',
    label: 'Actions',
    minWidth: 150,
    align: 'right'
  },
  { id: 'supplierName', label: 'Supplier name', minWidth: 150 },
  { id: 'supplierIndex', label: 'Supplier index', minWidth: 100 },
  { id: 'city', label: 'City', minWidth: 150 },
];

export const Certificates = [
  { label: 'ISO 1' },
  { label: 'ISO 2' },
  { label: 'BAS 120' },
  { label: 'BAS 220' },
  { label: 'JUS 122' },
  { label: "JUS 11123" },
  { label: 'ISO 10200' }
]

export const suppliers = [
  { supplierName: 'DCCS', supplierIndex: '1', city: 'Tuzla' },
  { supplierName: 'Andemis', supplierIndex: '2', city: 'Graz' },
  { supplierName: 'Rheingold', supplierIndex: '3', city: 'Berlin' },
  { supplierName: 'Mercedes', supplierIndex: '4', city: 'Sarajevo' },
  { supplierName: 'VW', supplierIndex: '5', city: 'Mostar' },
  { supplierName: 'Audi', supplierIndex: '6', city: 'Bihac' },
  { supplierName: 'BMW', supplierIndex: '7', city: 'Banja Luka' },
  { supplierName: 'Volvo', supplierIndex: '8', city: 'London' },
  { supplierName: 'Rampart', supplierIndex: '9', city: 'Visoko' },
  { supplierName: 'Semic', supplierIndex: '10', city: 'Visoko' },
]