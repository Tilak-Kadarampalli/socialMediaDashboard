import Cookies from 'js-cookie'
import {Navigate} from 'react-router-dom'
import { useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import BlockIcon from '@mui/icons-material/Block';
import {PageDiv, PageHead} from './styledComponents'


const usersList = [
    {
      "userId": 1,
      "username": "user123",
      "name": "John Doe",
      "email": "johndoe@example.com"
    },
    {
      "userId": 2,
      "username": "jane456",
      "name": "Jane Smith",
      "email": "janesmith@example.com"
    },
    {
      "userId": 3,
      "username": "michael789",
      "name": "Michael Johnson",
      "email": "michaeljohnson@example.com"
    },
    {
      "userId": 4,
      "username": "emily123",
      "name": "Emily Brown",
      "email": "emilybrown@example.com"
    },
    {
      "userId": 5,
      "username": "david456",
      "name": "David Miller",
      "email": "davidmiller@example.com"
    },
    {
      "userId": 6,
      "username": "olivia789",
      "name": "Olivia Wilson",
      "email": "oliviawilson@example.com"
    },
    {
      "userId": 7,
      "username": "william123",
      "name": "William Taylor",
      "email": "williamtaylor@example.com"
    },
    {
      "userId": 8,
      "username": "charlotte456",
      "name": "Charlotte Anderson",
      "email": "charlotteanderson@example.com"
    },
    {
      "userId": 9,
      "username": "james789",
      "name": "James Thomas",
      "email": "jamesthomas@example.com"
    },
    {
      "userId": 10,
      "username": "sophia123",
      "name": "Sophia Harris",
      "email": "sophiaharris@example.com"
    },
    {
      "userId": 11,
      "username": "benjamin456",
      "name": "Benjamin Adams",
      "email": "benjaminadams@example.com"
    },
    {
      "userId": 12,
      "username": "ava789",
      "name": "Ava Walker",
      "email": "avawalker@example.com"
    },
    {
      "userId": 13,
      "username": "lucas123",
      "name": "Lucas Scott",
      "email": "lucasscott@example.com"
    },
    {
      "userId": 14,
      "username": "mia456",
      "name": "Mia Miller",
      "email": "miamiller@example.com"
    },
    {
      "userId": 15,
      "username": "noah789",
      "name": "Noah Carter",
      "email": "noahcarter@example.com"
    },
    {
      "userId": 16,
      "username": "emma123",
      "name": "Emma Davis",
      "email": "emmadavis@example.com"
    },
    {
      "userId": 17,
      "username": "oliver456",
      "name": "Oliver Evans",
      "email": "oliverevans@example.com"
    },
    {
      "userId": 18,
      "username": "sofia789",
      "name": "Sofia Foster",
      "email": "sofiafoster@example.com"
    },
    {
      "userId": 19,
      "username": "jacob123",
      "name": "Jacob Garcia",
      "email": "jacobgarcia@example.com"
    },
    {
      "userId": 20,
      "username": "isabella456",
      "name": "Isabella Harris",
      "email": "isabellaharris@example.com"
    }
  ]
  const columns = [
    { id: 'userId', label: 'User Id', minWidth: 50 },
    { id: 'username', label: 'Username', minWidth: 100 },
    {
      id: 'name',
      label: 'Name',
      minWidth: 170,
    
    },
    {
      id: 'email',
      label: 'Email',
      minWidth: 170,
    
    },
    {
      id: 'edit',
      label: 'Edit',
      minWidth: 50
    },
    {
      id: 'ban',
      label: 'Ban',
      minWidth: 50
    }

  ];


const Users = () =>{
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const logIn = Cookies.get('loggedin')

  

  return (
    <PageDiv>
       {logIn === undefined && <Navigate to="/login" replace/>}
      <PageHead>Users</PageHead>
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 450 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead >
            <TableRow >
              {columns.map((column) => (
                <TableCell 
                  key={column.id}
                  style={{ minWidth: column.minWidth, backgroundColor:'#171920', color: '#bcc3d1', fontWeight:'bold', fontFamily:'Montserrat' }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {usersList
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.userId}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      const bgColor = row.userId % 2 === 0 ? '#f1f0f4' : '#ffffff';
                      return (
                        <TableCell key={column.id} style={{backgroundColor: `${bgColor}`}}>
                          {column.id === 'ban' &&(<IconButton aria-label="ban" onClick={()=>{
                            console.log(row.userId)
                          }}><BlockIcon /></IconButton>)}
                          {column.id === 'edit' && <IconButton aria-label="edit"><EditIcon /></IconButton>}

                          { value }
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={usersList.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </PageDiv>
  );
}

export default Users