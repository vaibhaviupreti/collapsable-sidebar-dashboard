import React, { useState } from 'react';
import {
  Grid, Typography, TableContainer, Table, TableHead, TableRow,
  TableCell, TableBody, TablePagination, TextField, Avatar, TableSortLabel,
  IconButton
} from '@mui/material';
import { faEdit, faTrash, faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { styled } from '@mui/material/styles';

const dummyData = [
  { id: 1, name: 'Jacob Ryan', designation: 'Receptionist', mobile: '+167-894-2378', email: 'example@email.com', address: '22,tilak appt. surat', joiningDate: '03 Dec 2001', avatar: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Megha Trivedi', designation: 'Manager', mobile: '+167-894-2378', email: 'example@email.com', address: '22,tilak appt. surat', joiningDate: '17 Mar 2013', avatar: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Rajesh', designation: 'Director', mobile: '+167-894-2378', email: 'example@email.com', address: '22,tilak appt. surat', joiningDate: '22 Feb 2000', avatar: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Pooja Patel', designation: 'Programmer', mobile: '+167-894-2378', email: 'example@email.com', address: '22,tilak appt. surat', joiningDate: '27 Aug 2005', avatar: 'https://via.placeholder.com/150' },
  { id: 5, name: 'Sarah Smith', designation: 'Manager', mobile: '+167-894-2378', email: 'example@email.com', address: '22,tilak appt. surat', joiningDate: '05 Jun 2011', avatar: 'https://via.placeholder.com/150' },
  { id: 6, name: 'Anna Karenina', designation: 'HR', mobile: '+167-894-2378', email: 'example@email.com', address: '22,tilak appt. surat', joiningDate: '01 Jul 2015', avatar: 'https://via.placeholder.com/150' },
  { id: 7, name: 'Anna Karenina', designation: 'HR', mobile: '+167-894-2378', email: 'example@email.com', address: '22,tilak appt. surat', joiningDate: '01 Jul 2015', avatar: 'https://via.placeholder.com/150' },
  { id: 8, name: 'Anna Karenina', designation: 'HR', mobile: '+167-894-2378', email: 'example@email.com', address: '22,tilak appt. surat', joiningDate: '01 Jul 2015', avatar: 'https://via.placeholder.com/150' },
  { id: 9, name: 'Anna Karenina', designation: 'HR', mobile: '+167-894-2378', email: 'example@email.com', address: '22,tilak appt. surat', joiningDate: '01 Jul 2015', avatar: 'https://via.placeholder.com/150' },
  { id: 10, name: 'Anna Karenina', designation: 'HR', mobile: '+167-894-2378', email: 'example@email.com', address: '22,tilak appt. surat', joiningDate: '01 Jul 2015', avatar: 'https://via.placeholder.com/150' },
  { id: 11, name: 'Anna Karenina', designation: 'HR', mobile: '+167-894-2378', email: 'example@email.com', address: '22,tilak appt. surat', joiningDate: '01 Jul 2015', avatar: 'https://via.placeholder.com/150' },
];

const AllEmployeeTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [data, setData] = useState(dummyData);
  const [searchQuery, setSearchQuery] = useState('');
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('name');

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

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
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

  const sortedData = () => {
    return data.sort((a, b) => {
      if (orderBy === 'joiningDate') {
        return (order === 'asc' ? new Date(a[orderBy]) - new Date(b[orderBy]) : new Date(b[orderBy]) - new Date(a[orderBy]));
      }
      return (order === 'asc' ? a[orderBy].localeCompare(b[orderBy]) : b[orderBy].localeCompare(a[orderBy]));
    });
  };

  const filteredData = sortedData().filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.designation.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.mobile.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.joiningDate.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${TableCell.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${TableCell.body}`]: {
      fontSize: 14,
    },
  }));

  return (
    <section style={{ padding: '20px' }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            All Employees
          </Typography>
        </Grid>
        <Grid item xs={12} style={{display:'flex',justifyContent:'flex-end'}}>
          <TextField
            // fullWidth
            label="Search"
            variant="standard"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </Grid>
        {/* <Grid item xs={12} md={6}>
          <Typography variant="body2" gutterBottom>
            {page * rowsPerPage + 1}-{Math.min((page + 1) * rowsPerPage, filteredData.length)} of {filteredData.length} entries
          </Typography>
        </Grid> */}
        <Grid item xs={12}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <StyledTableCell>
                    <TableSortLabel
                      active={orderBy === 'id'}
                      direction={orderBy === 'id' ? order : 'asc'}
                      onClick={() => handleRequestSort('id')}
                    >
                      #
                    </TableSortLabel>
                  </StyledTableCell>
                  <StyledTableCell>
                    <TableSortLabel
                      active={orderBy === 'name'}
                      direction={orderBy === 'name' ? order : 'asc'}
                      onClick={() => handleRequestSort('name')}
                    >
                      Name
                    </TableSortLabel>
                  </StyledTableCell>
                  <StyledTableCell>
                    <TableSortLabel
                      active={orderBy === 'designation'}
                      direction={orderBy === 'designation' ? order : 'asc'}
                      onClick={() => handleRequestSort('designation')}
                    >
                      Designation
                    </TableSortLabel>
                  </StyledTableCell>
                  <StyledTableCell>
                    <TableSortLabel
                      active={orderBy === 'mobile'}
                      direction={orderBy === 'mobile' ? order : 'asc'}
                      onClick={() => handleRequestSort('mobile')}
                    >
                      Mobile
                    </TableSortLabel>
                  </StyledTableCell>
                  <StyledTableCell>
                    <TableSortLabel
                      active={orderBy === 'email'}
                      direction={orderBy === 'email' ? order : 'asc'}
                      onClick={() => handleRequestSort('email')}
                    >
                      Email
                    </TableSortLabel>
                  </StyledTableCell>
                  <StyledTableCell>
                    <TableSortLabel
                      active={orderBy === 'address'}
                      direction={orderBy === 'address' ? order : 'asc'}
                      onClick={() => handleRequestSort('address')}
                    >
                      Address
                    </TableSortLabel>
                  </StyledTableCell>
                  <StyledTableCell>
                    <TableSortLabel
                      active={orderBy === 'joiningDate'}
                      direction={orderBy === 'joiningDate' ? order : 'asc'}
                      onClick={() => handleRequestSort('joiningDate')}
                    >
                      Joining Date
                    </TableSortLabel>
                  </StyledTableCell>
                  <StyledTableCell>Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredData.slice(page * rowsPerPage, (page + 1) * rowsPerPage).map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>
                      <Grid container alignItems="center">
                        <Avatar alt={row.name} src={row.avatar} style={{ marginRight: '10px' }} />
                        {row.name}
                      </Grid>
                    </TableCell>
                    <TableCell>{row.designation}</TableCell>
                    <TableCell>{row.mobile}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.address}</TableCell>
                    <TableCell>{row.joiningDate}</TableCell>
                    <TableCell>
                      {/* <IconButton onClick={() => handleEdit(row.id)} color="primary">
                        <FontAwesomeIcon icon={faPen} />
                      </IconButton> */}
                      {/* <IconButton onClick={() => handleDelete(row.id)} color="secondary">
                        <FontAwesomeIcon icon={faTrash} />                        
                      </IconButton> */}
                      <IconButton onClick={() => handleEdit(row.id)} color="primary" style={{ backgroundColor: '#4fab52', borderRadius: '50%', padding: 6, marginRight:3 }}>
                        <FontAwesomeIcon icon={faPen} style={{ fontSize: 16, color: 'white' }} />
                        </IconButton>
                        <IconButton onClick={() => handleDelete(row.id)} color="primary" style={{ backgroundColor: '#f96332', borderRadius: '50%', padding: 6 }}>
                        <FontAwesomeIcon icon={faTrash} style={{ fontSize: 16, color: 'white' }} />
                        </IconButton>
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
    </section>
  );
};

export default AllEmployeeTable;
