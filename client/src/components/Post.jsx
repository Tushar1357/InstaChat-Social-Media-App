import React, { useState } from "react";
import { Form, useNavigate } from 'react-router-dom';
import Alert from "./Alert";

function Post() {

  const navigate = useNavigate();
  const [showAlert, setAlertStatus] = useState(false)
  const handleSubmit = (e)=>{
    e.preventDefault();
    const formData = new FormData(e.target);

      fetch('http://localhost:3000/create-post/post',{
        body: formData,
        method: 'POST',
        credentials: 'include'
      }).then(res=>res.json()).then(data=>{
        if (data.status){
          navigate('/your-post');
        }
        else{
          setAlertStatus(true)
        }
      })
    }

    
  return (
    <div
      className="container text-white flex-column"
      style={{ height: "100vh",maxWidth: "500px" }}
    >
      <h1 className="mt-3 mb-3">Create Post</h1>
      {showAlert && <Alert text={"An error occurred"} />}
      <form method="post" encType="multipart/form-data"  onSubmit={handleSubmit}>
        <span>Title</span>
        <input
          type="text"
          className="form-control bg-dark text-white mb-3"
          name="title"
          placeholder="Enter post title"
          required
        />
        <span>Post Content</span>
        <textarea
          type="text"
          rows={5}
          className="form-control bg-dark text-white mb-3"
          name="content"
          placeholder="Enter post content"
          required
        />
        <span>Upload Image (Optional)</span>
        <input
          type="file"
          className="form-control bg-dark text-white mb-3"
          name="image"
          placeholder="Enter tags (optional)"
    
        />
        <span>Tags (Optional)</span>
        <input
          type="text"
          name="tags"
          className="form-control bg-dark text-white mb-3"
          placeholder="Enter tags (optional)"
        />
        <button className="btn btn-primary w-100" type="submit">Post</button>
      </form>
    </div>
  );
}

export default Post;
