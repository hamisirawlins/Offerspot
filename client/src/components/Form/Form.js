   import React, {useState, useEffect} from 'react';
   import {TextField,Button,Typography,Paper} from '@material-ui/core';
   import FileBase from 'react-file-base64';
   import {useDispatch,useSelector} from 'react-redux';
   

   import useStyles from './styles';
   import {createPost,  updatePost} from '../../actions/posts';

   const Form = ({currentId, setCurrentId}) =>{
       const [postData,setPostData] = useState({
           creator:'',title:'',descr:'',tags:'',selectedFile:''
       });
       const post=useSelector((state)=>currentId? state.posts.find((p)=>p._id===currentId):null);
       const classes= useStyles();
       const dispatch = useDispatch();

       useEffect(()=>{
           if(post) setPostData(post);
       },[post]);

       const handleSubmit=(e)=>{
           e.preventDefault();

           if(currentId){
            dispatch(updatePost(currentId, postData));   
           } else {
           dispatch(createPost(postData));
           }
           clear();
       }

       const clear=()=>{
           setCurrentId(null);
           setPostData({creator:'',title:'',descr:'',tags:'',selectedFile:''});
       }

       return(
           <Paper className={classes.paper}>
              <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                  <Typography variant="h6">{currentId ? 'Edit':'Create'} Your Offer</Typography>
                  <TextField name="creator" variant="outlined" label="Your Name" fullWidth value={postData.creator} onChange={(e)=> setPostData({...postData, creator:e.target.value})}/>
                  <TextField name="title" variant="outlined" label="Post Title" fullWidth value={postData.title} onChange={(e)=> setPostData({...postData, title:e.target.value})}/>
                  <TextField name="descr" variant="outlined" label="Description" fullWidth value={postData.descr} onChange={(e)=> setPostData({...postData, descr:e.target.value})}/>
                  <TextField name="tags" variant="outlined" label="Tags separated by comma" fullWidth value={postData.tags} onChange={(e)=> setPostData({...postData, tags:e.target.value})}/>
                  <div className={classes.fileInput}>
                      <FileBase type="file" multiple={false} onDone={({base64})=> setPostData({...postData, selectedFile: base64})}/>
                  </div>
                  <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Share</Button>
                  <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
                  </form> 
           </Paper>
       );
   }

   export default Form;