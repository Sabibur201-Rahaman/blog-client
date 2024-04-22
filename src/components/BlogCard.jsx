import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box } from '@mui/material';
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function BlogCard({title,description,image,userName,time,id,isUser}) {
  const [expanded, setExpanded] = React.useState(false);
const navigate=useNavigate()
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
const handleEdit=()=>{
navigate(`/blog-details/${id}`)
}
const handleDelete=async()=>{
  try{
const {data}=await axios.delete(`http://localhost:8080/api/v1/blog/deleteBlog/${id}`)
if(data?.success){
toast('blog deleted successfully')
  window.location.reload()
}
  }catch(err){
console.log(err)
  }
}
  return (
    <Card sx={{ width:"40%",margin:"auto",mt:2,padding:2,boxShadow:"5px,5px,10px #ccc"}}>
      {isUser&&(
<Box display={'flex'}>
<IconButton onClick={handleEdit}sx={{marginLeft:'auto'}}>
<ModeEditIcon/>
</IconButton>
<IconButton onClick={handleDelete}>
  <DeleteIcon/>
</IconButton>
</Box>
      )}
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[1000] }} aria-label="recipe">
            {userName}
          </Avatar>
        }
        
        title={userName}
        subheader={time}
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="Paella dish"
      />
      <CardContent>
      <Typography variant='h6' color='violet'>
          Title:{title}
        </Typography>
        <Typography variant="body2" color="secondary">
         Description: {description}
        </Typography>
      </CardContent>
      <Toaster position="Bottom-center"/>

    </Card>
  );
}
