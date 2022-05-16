import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Export from './export.components';
import { FileType } from '@constants/common';
import FileSaver from "file-saver";
import * as XLSX from 'xlsx';

export default {
  title: 'UI components/Export',
  component: Export,
  argTypes: {},
} as ComponentMeta<typeof Export>;

const Template: ComponentStory<typeof Export> = (args) => <Export {...args} />;


const headers = [
  { label: "First Name", key: "firstName" },
  { label: "Last Name", key: "lastName" },
  { label: "Email", key: "email" }
];

const csvData = [
  { firstName: "Ahmed", lastName: "Tomi", email: "ah@smthing.co.com" },
  { firstName: "Raed", lastName: "Labes", email: "rl@smthing.co.com" },
  { firstName: "Yezzi", lastName: "Min l3b", email: "ymin@cocococo.com" }
];

const wscols = [
  { wch: Math.max(...csvData.map(customer => customer.firstName.length)) },
  { wch: Math.max(...csvData.map(customer => customer.lastName.length)) },
  { wch: Math.max(...csvData.map(customer => customer.email.length)) }
];
const Heading = [
  {
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
  }
];

const fileType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";

const exportToXlsx = () => {
  const ws = XLSX.utils.json_to_sheet(Heading, {
    header: ["firstName", "lastName", "email"],
    skipHeader: true,
    origin: 0
  } as any);
  ws["!cols"] = wscols;
  XLSX.utils.sheet_add_json(ws, csvData, {
    header: ["firstName", "lastName", "email"],
    skipHeader: true,
    origin: -1
  });
  const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
  const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
  const data = new Blob([excelBuffer], { type: fileType });
  FileSaver.saveAs(data, 'downloadFile.xlsx');
};

export const DownloadCSV = Template.bind({});
export const DownloadXlsx = Template.bind({});

DownloadCSV.args = {
  data: csvData,
  type: 'primary',
  label: 'Download CSV',
  headers: headers,
  fileName: 'Download CSV',
  fileType: FileType.CSV
};

DownloadXlsx.args = {
  data: csvData,
  type: 'primary',
  label: 'Download XLSX',
  headers: headers,
  fileName: 'Download XLSX',
  fileType: FileType.XLSX,
  exportToXlsx: exportToXlsx
}