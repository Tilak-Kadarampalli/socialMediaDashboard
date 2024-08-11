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
import DeleteIcon from '@mui/icons-material/Delete';
import HideImageIcon from '@mui/icons-material/HideImage';
import { PageDiv,PageHead } from '../Users/styledComponents';


const dummyList = [
    {
      "postId": 1,
      "postCaption": "Exploring the vibrant city streets today! #urbanexplorer #citylife",
      "mediaUrl": "https://example.com/image1.jpg"
    },
    {
      "postId": 2,
      "postCaption": "Sunset vibes and good company. What more could you ask for? #sunsetlovers #friends",
      "mediaUrl": "https://example.com/image2.jpg"
    },
    {
      "postId": 3,
      "postCaption": "Indulging in my favorite pastry. Pure bliss! #foodie #pastrylover",
      "mediaUrl": "https://example.com/image3.jpg"
    },
    {
      "postId": 4,
      "postCaption": "Hiking adventure with the best crew. Feeling refreshed! #hiking #naturelovers",
      "mediaUrl": "https://example.com/image4.jpg"
    },
    {
      "postId": 5,
      "postCaption": "Cozy nights in with a good book. Perfect escape from reality. #bookworm #cozyvibes",
      "mediaUrl": "https://example.com/image5.jpg"
    },
    {
      "postId": 6,
      "postCaption": "Trying out a new recipe. Let's see how this turns out! #cooking #foodie",
      "mediaUrl": "https://example.com/image6.jpg"
    },
    {
      "postId": 7,
      "postCaption": "Beach days are the best days. Sun, sand, and relaxation. #beachlife #vacationmode",
      "mediaUrl": "https://example.com/image7.jpg"
    },
    {
      "postId": 8,
      "postCaption": "Exploring a new coffee shop in the neighborhood. Loving the atmosphere! #coffeelover #cafehopping",
      "mediaUrl": "https://example.com/image8.jpg"
    },
    {
      "postId": 9,
      "postCaption": "Feeling grateful for this beautiful day. Taking some time for self-care. #mindfulness #gratitude",
      "mediaUrl": "https://example.com/image9.jpg"
    },
    {
      "postId": 10,
      "postCaption": "Trying out a new workout routine. Pushing my limits! #fitness #workoutmotivation",
      "mediaUrl": "https://example.com/image10.jpg"
    },
    {
      "postId": 11,
      "postCaption": "Discovering hidden gems in the city. Love exploring new places. #cityexplorer #hiddengems",
      "mediaUrl": "https://example.com/image11.jpg"
    },
    {
      "postId": 12,
      "postCaption": "Spending quality time with loved ones. Creating lasting memories. #familytime #love",
      "mediaUrl": "https://example.com/image12.jpg"
    },
    {
      "postId": 13,
      "postCaption": "Obsessed with this new outfit! Feeling confident and stylish. #fashion #ootd",
      "mediaUrl": "https://example.com/image13.jpg"
    },
    {
      "postId": 14,
      "postCaption": "Nature's beauty never fails to amaze me. Taking a break from the city. #naturelover #escape",
      "mediaUrl": "https://example.com/image14.jpg"
    },
    {
      "postId": 15,
      "postCaption": "Trying out a new hobby. Learning something new is always exciting. #newhobby #personalgrowth",
      "mediaUrl": "https://example.com/image15.jpg"
    },
    {
      "postId": 16,
      "postCaption": "Enjoying a delicious meal with friends. Good food and good company. #foodie #friends",
      "mediaUrl": "https://example.com/image16.jpg"
    },
    {
      "postId": 17,
      "postCaption": "Exploring a new city. So many things to see and do! #travel #adventure",
      "mediaUrl": "https://example.com/image17.jpg"
    },
    {
      "postId": 18,
      "postCaption": "Indulging in some retail therapy. Treating myself to something new. #shopping #retailtherapy",
      "mediaUrl": "https://example.com/image18.jpg"
    },
    {
      "postId": 19,
      "postCaption": "Cozy nights in with a good movie. Perfect way to relax. #movie night #chillmode",
      "mediaUrl": "https://example.com/image19.jpg"
    },
    {
      "postId": 20,
      "postCaption": "Feeling inspired by this beautiful artwork. Art has the power to move us. #artlover #inspiration",
      "mediaUrl": "https://example.com/image20.jpg"
    },
    {
      "postId": 21,
      "postCaption": "Exploring the outdoors and soaking up the sunshine. Vitamin D boost! #naturelover #sunshine",
      "mediaUrl": "https://example.com/image21.jpg"
    },
    {
      "postId": 22,
      "postCaption": "Trying out a new coffee shop in the neighborhood. Loving the atmosphere! #coffeelover #cafehopping",
      "mediaUrl": "https://example.com/image22.jpg"
    },
    {
      "postId": 23,
      "postCaption": "Feeling grateful for this beautiful day. Taking some time for self-care. #mindfulness #gratitude",
      "mediaUrl": "https://example.com/image23.jpg"
    },
    {
      "postId": 24,
      "postCaption": "Trying out a new workout routine. Pushing my limits! #fitness #workoutmotivation",
      "mediaUrl": "https://example.com/image24.jpg"
    },
    {
      "postId": 25,
      "postCaption": "Discovering hidden gems in the city. Love exploring new places. #cityexplorer #hiddengems",
      "mediaUrl": "https://example.com/image25.jpg"
    },
    {
      "postId": 26,
      "postCaption": "Spending quality time with loved ones. Creating lasting memories. #familytime #love",
      "mediaUrl": "https://example.com/image26.jpg"
    },
    {
      "postId": 27,
      "postCaption": "Obsessed with this new outfit! Feeling confident and stylish. #fashion #ootd",
      "mediaUrl": "https://example.com/image27.jpg"
    },
    {
      "postId": 28,
      "postCaption": "Nature's beauty never fails to amaze me. Taking a break from the city. #naturelover #escape",
      "mediaUrl": "https://example.com/image28.jpg"
    },
    {
      "postId": 29,
      "postCaption": "Trying out a new hobby. Learning something new is always exciting. #newhobby #personalgrowth",
      "mediaUrl": "https://example.com/image29.jpg"
    },
    {
      "postId": 30,
      "postCaption": "Enjoying a delicious meal with friends. Good food and good company. #foodie #friends",
      "mediaUrl": "https://example.com/image30.jpg"
    },
    {
      "postId": 31,
      "postCaption": "Exploring a new city. So many things to see and do! #travel #adventure",
      "mediaUrl": "https://example.com/image31.jpg"
    },
    {
      "postId": 32,
      "postCaption": "Indulging in some retail therapy. Treating myself to something new. #shopping #retailtherapy",
      "mediaUrl": "https://example.com/image32.jpg"
    },
    {
      "postId": 33,
      "postCaption": "Cozy nights in with a good movie. Perfect way to relax. #movie night #chillmode",
      "mediaUrl": "https://example.com/image33.jpg"
    },
    {
      "postId": 34,
      "postCaption": "Feeling inspired by this beautiful artwork. Art has the power to move us. #artlover #inspiration",
      "mediaUrl": "https://example.com/image34.jpg"} 
    ]
    const columns = [
        { id: 'postId', label: 'Post Id', minWidth: 50 },
        { id: 'postCaption', label: 'Caption', minWidth: 70 },
       
        {
          id: 'mediaUrl',
          label: 'Media URL',
          minWidth: 170,
        
        },
        {
          id: 'delete',
          label: 'Delete',
          minWidth: 50
        },
        {
          id: 'hide',
          label: 'Hide',
          minWidth: 50
        }
    
      ];
  

const Posts = () =>{
    const [page, setPage] = useState(0);
    const [postsList,setPostsList] = useState(dummyList)
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const logIn = Cookies.get('loggedin')

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const onDeletePost=(postId)=>{
    const updatedList = postsList.filter((eachPost)=>eachPost.postId!==postId)

    setPostsList(updatedList)



  }

  return (
    
    <PageDiv>
      {logIn === undefined && <Navigate to="/login" replace/>}
      <PageHead>Posts</PageHead>
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 450 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
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
            {postsList
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.postId}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      const bgColor = row.postId % 2 === 0 ? '#f1f0f4' : '#ffffff';
                      return (
                        <TableCell key={column.id} style={{backgroundColor: `${bgColor}`}}>
                          {column.id === 'hide' &&(<IconButton aria-label="hide" onClick={()=>{
                            console.log(row.postId)
                          }}><HideImageIcon /></IconButton>)}
                          {column.id === 'delete' && <IconButton aria-label="delete" onClick={()=>{onDeletePost(row.postId)}}><DeleteIcon /></IconButton>}
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
        count={postsList.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </PageDiv>
  );
}

export default Posts