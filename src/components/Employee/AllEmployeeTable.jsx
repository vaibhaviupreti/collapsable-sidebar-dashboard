// AllEmployeeTable
import React from 'react';
import { useState } from 'react';
import { Grid, Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, TablePagination, Button, TextField, IconButton, EditIcon, DeleteIcon } from '@mui/material';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const dummyData = [
    { id: 1, name: 'Jacob Ryan', designation: 'Receptionist', mobile: '+167-894-2378', email: 'example@email.com', address: '22,tilak appt. surat', joiningDate: '03 Dec 2001' },
    { id: 2, name: 'Megha Trivedi', designation: 'Manager', mobile: '+167-894-2378', email: 'example@email.com', address: '22,tilak appt. surat', joiningDate: '17 Mar 2013' },
    { id: 3, name: 'Rajesh', designation: 'Director', mobile: '+167-894-2378', email: 'example@email.com', address: '22,tilak appt. surat', joiningDate: '22 Feb 2000' },
    { id: 4, name: 'Pooja Patel', designation: 'Programmer', mobile: '+167-894-2378', email: 'example@email.com', address: '22,tilak appt. surat', joiningDate: '27 Aug 2005' },
    { id: 5, name: 'Sarah Smith', designation: 'Manager', mobile: '+167-894-2378', email: 'example@email.com', address: '22,tilak appt. surat', joiningDate: '05 Jun 2011' }
];

const AllEmployeeTable = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [data, setData] = useState(dummyData);
    const [searchQuery, setSearchQuery] = useState('');

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleEdit = (id) => {
        // Implement edit functionality here
        console.log('Edit clicked for employee with ID:', id);
    };

    const handleDelete = (id) => {
        // Implement delete functionality here
        console.log('Delete clicked for employee with ID:', id);
        setData(data.filter((item) => item.id !== id));
    };

    const filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.designation.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.mobile.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.joiningDate.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h4" gutterBottom>
                    All Employees
                </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    fullWidth
                    label="Search"
                    variant="outlined"
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <Typography variant="body2" gutterBottom>
                    {page * rowsPerPage + 1}-{Math.min((page + 1) * rowsPerPage, filteredData.length)} of {filteredData.length} entries
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>#</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Designation</TableCell>
                                <TableCell>Mobile</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Address</TableCell>
                                <TableCell>Joining Date</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredData.slice(page * rowsPerPage, (page + 1) * rowsPerPage).map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell>{row.designation}</TableCell>
                                    <TableCell>{row.mobile}</TableCell>
                                    <TableCell>{row.email}</TableCell>
                                    <TableCell>{row.address}</TableCell>
                                    <TableCell>{row.joiningDate}</TableCell>
                                    <TableCell>
                                        {/* <IconButton onClick={() => handleEdit(row.id)}>
                                            <EditIcon />
                                        </IconButton> */}
                                        <FontAwesomeIcon onClick={() => handleEdit(row.id)} icon={faEdit} />

                                        {/* <IconButton onClick={() => handleDelete(row.id)}>
                                            <DeleteIcon />
                                        </IconButton> */}
                                        <FontAwesomeIcon onClick={() => handleDelete(row.id)} icon={faEdit} />

                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
            <Grid item xs={12}>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={filteredData.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Grid>
        </Grid>
    );
};

export default AllEmployeeTable;