// EmployeeTable.js

import React, { useState } from 'react';
import {
  Grid, Typography, TableContainer, Table, TableHead, TableRow,
  TableCell, TableBody, TablePagination, TextField, Avatar, TableSortLabel,
  IconButton
} from '@mui/material';
import { faEdit, faTrash, faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { styled } from '@mui/material/styles';

const DataTable = ({ data, onDelete, onEdit }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
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

  const handleEdit = (id) => {
    if (onEdit) {
      onEdit(id);
    }
  };

  const handleDelete = (id) => {
    if (onDelete) {
      onDelete(id);
    }
  };

  return (
    <section style={{ padding: '20px' }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            All Employees
          </Typography>
        </Grid>
        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <TextField
            label="Search"
            variant="standard"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </Grid>
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
                      <IconButton onClick={() => handleEdit(row.id)} color="primary" style={{ backgroundColor: '#4fab52', borderRadius: '50%', padding: 6, marginRight: 3 }}>
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

export default DataTable;
