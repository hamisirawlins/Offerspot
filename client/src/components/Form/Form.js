   import React, {useState} from 'react';
   import {TextField,Button,Typography,Paper} from '@material-ui/core';

   import useStyles from './styles';

   const Form = () =>{
       const [postData,setPostData] = useState({
           creator:'',title:'',descr:'',tags:'',selectedFile:''
       });
       const classes= useStyles();
       const handleSubmit=()=>{

       }
       return(
           <Paper className={classes.paper}>
              <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
                  <Typography variant="h6">Share Your Offers</Typography>
                  <TextField name="creator" variant="outlined" label="Your Name" fullWidth value={postData.creator} onChange={(e)=> setPostData({...postData, creator:e.target.value})}/>
                  <TextField name="title" variant="outlined" label="Post Title" fullWidth value={postData.title} onChange={(e)=> setPostData({...postData, title:e.target.value})}/>
                  <TextField name="descr" variant="outlined" label="Description" fullWidth value={postData.descr} onChange={(e)=> setPostData({...postData, descr:e.target.value})}/>
                  <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e)=> setPostData({...postData, tags:e.target.value})}/>
                  </form> 
           </Paper>
       );
   }

   export default Form;