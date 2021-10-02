import React, { useMemo, forwardRef, useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import MOC_DATA from '../MOCK_DATA.json';
import CustomFirstName from './CustomFirstName';
import { alpha } from '@material-ui/core/styles';
import CustomRow from './CustomRow';
import Link from '@material-ui/core/Link';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
 Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
 Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
 Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
 Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
 DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
 Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
 Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
 Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
 FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
 LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
 NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
 PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
 ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
 Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
 SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
 ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
 ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

const empStatusFormat = [
 { id: 0, title: 'Deactive' },
 { id: 1, title: 'Active' },
];

function BasicTable1() {
 const [empStatus, setEmpStatus] = useState({});
 const [tableData, setTableData] = useState(MOC_DATA);
 useEffect(() => {
  const status = {};
  empStatusFormat.map((p) => (status[p.id] = p.title));
  setEmpStatus(status);
 }, []);

 const handleDelete = (data) => {
  alert(data.id);
 };
 //const DATA = useMemo(() => MOC_DATA, []);
 const columns = [
  {
   title: 'Id',
   field: 'id',
   editable: false,
   grouping: false,
   render: (rowData) => (
    <Link
     href={`https://picsum.photos/id/${rowData.id}/500/800`}
     target="_blank">
     {rowData.id}
    </Link>
   ),
  },
  {
   title: 'First Name',
   field: 'first_name',
   render: (row) => <CustomFirstName name={row.first_name} />,
  },
  { title: 'Last Name', field: 'last_name' },
  //{ title: 'Email', field: 'email' },
  //{ title: 'Date Of Birth', field: 'date_of_birth' },
  //{ title: 'Age', field: 'age' },
  { title: 'Country', field: 'country' },
  //{ title: 'Phone', field: 'phone' },
  { title: 'Amount', field: 'amount', render: (row) => `₹${row.amount}` },
  { title: 'Gender', field: 'gender', lookup: { M: 'Male', F: 'Female' } },
  { title: 'Status', field: 'status', lookup: empStatus },
  {
   title: 'Status using Reander',
   field: 'status',
   render: (row) => (
    <div className={row.status ? 'status-active' : 'status-deactive'}>
     {row.status ? 'Active' : 'Deactive'}
    </div>
   ),
  },
 ];
 return (
  <div>
   <MaterialTable
    icons={tableIcons}
    title="Basic Material Table"
    data={tableData}
    columns={columns}
    options={{
     search: true,
     paging: true,
     filtering: true,
     actionsColumnIndex: -1,
     addRowPosition: 'first',
     grouping: true,
    }}
    editable={{
     onRowAdd: (newRow) =>
      new Promise((resolve, reject) => {
       const addNewRow = async (newRow) => {
        try {
         //do async call to add a new row in DB
         //console.log(newRow);
         const updatedRow = [
          ...tableData,
          { ...newRow, id: Math.ceil(Math.random() * 100) + 200 },
         ];
         setTableData(updatedRow);
         setTimeout(() => {
          resolve();
         }, 1500);
        } catch (error) {
         reject();
        }
       };
       addNewRow(newRow);
      }),
     onRowDelete: (selectRow) =>
      new Promise((resolve, reject) => {
       const deleteRow = async (selectRow) => {
        try {
         //do async call to delete row in DB
         //console.log(selectRow);
         const updatedRow = tableData.filter((p) => p.id !== selectRow.id);
         setTableData(updatedRow);
         setTimeout(() => {
          resolve();
         }, 1500);
        } catch (error) {
         reject();
        }
       };
       deleteRow(selectRow);
      }),
     onRowUpdate: (selectedRow) =>
      new Promise((resolve, reject) => {
       const updateRow = async (selectedRow) => {
        try {
         //do async call to delete row in DB
         //console.log(selectedRow);
         const updatedRow = tableData.map((p) =>
          p.id === selectedRow.id ? selectedRow : p,
         );
         setTableData(updatedRow);
         setTimeout(() => {
          resolve();
         }, 1500);
        } catch (error) {
         reject();
        }
       };
       updateRow(selectedRow);
      }),
     onBulkUpdate: (changedRows) =>
      new Promise((resolve, reject) => {
       const bulkUpdate = async (changedRows) => {
        try {
         const changedItems = Object.values(changedRows); // it will change object to array
         //console.dir(changedItems);
         const updatedRows = [...tableData];
         changedItems.forEach((p) => {
          const index = updatedRows.findIndex((row) => row.id === p.newData.id);
          updatedRows[index] = p.newData;
         });
         ////do async call to delete row in DB
         console.dir(updatedRows);
         setTableData(updatedRows);
         setTimeout(() => {
          console.log('done');
          resolve();
         }, 1500);
        } catch (error) {
         reject();
        }
       };
       bulkUpdate(changedRows);
      }),
    }}
    components={{
     Row: (props) => <CustomRow {...props} handleDelete={handleDelete} />,
    }}
   />
  </div>
 );
}

export default BasicTable1;
