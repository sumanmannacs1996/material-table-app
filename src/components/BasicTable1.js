import React, { useMemo } from 'react';
import MaterialTable from 'material-table';
import MOC_DATA from '../MOCK_DATA.json';

function BasicTable1() {
 const DATA = useMemo(() => MOC_DATA, []);
 const columns = [
  { title: 'Id', field: 'id' },
  { title: 'First Name', field: 'first_name' },
  { title: 'Last Name', field: 'last_name' },
  { title: 'Email', field: 'email' },
  { title: 'Date Of Birth', field: 'date_of_birth' },
  { title: 'Age', field: 'age' },
  { title: 'Country', field: 'country' },
  { title: 'Phone', field: 'phone' },
 ];
 return (
  <div>
   <MaterialTable title="Basic Material Table" data={DATA} columns={columns} />
  </div>
 );
}

export default BasicTable1;
