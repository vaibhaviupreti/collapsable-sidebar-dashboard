
import React, { useState } from 'react';
import DataTable from '../TableData/TableData';

const ParentComponent = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: 'Vaishnav Kumar', designation: 'Receptionist', mobile: '+91 7999256489', email: 'example1@email.com', address: '22,tilak appt. surat', joiningDate: '03 Dec 2001', avatar: 'images/avatar.jpg' },
    { id: 2, name: 'Neelesh Sharma', designation: 'Manager', mobile: '+91 8989685454', email: 'example2@email.com', address: '22,tilak appt. surat', joiningDate: '03 Dec 2001', avatar: 'images/avatar.jpg' },
   
  ]);

  const handleEditEmployee = (id) => {
    // Implement edit functionality
    console.log('Edit clicked for employee with ID:', id);
  };

  const handleDeleteEmployee = (id) => {
    // Implement delete functionality
    console.log('Delete clicked for employee with ID:', id);
    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  return (
    <div>
      <DataTable
        data={employees}
        onDelete={handleDeleteEmployee}
        onEdit={handleEditEmployee}
      />
    </div>
  );
};

export default ParentComponent;
