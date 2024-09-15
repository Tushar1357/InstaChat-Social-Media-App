import React from "react";
import React, { useEffect, useState } from "react";
import { BiLike, BiShare } from "react-icons/bi";

function YourPosts() {
  const [postList, setpostList] = useState([]);
  const [fetched, setFetched] = useState(false);
  console.log(postList);

  {
    useEffect(() => {
      fetch("https://dummyjson.com/posts")
        .then((res) => res.json())
        .then((data) => {
          setpostList(data.posts);
          // console.log(data.posts);
          setFetched(true);
        });
    }, []);
  }
  return (
    <div
      className="container d-flex flex-column align-items-center mt-3"
      style={{ overflowY: "auto", height: "100vh", overflowX: "none" }}
    >
      {postList.length === 0 ? (
        <h1 className="text-white">There are no posts</h1>
      ) : (
        postList.map((item) => (
          <div
            className="card m-4"
            style={{ maxWidth: "400px", minWidth: "300px" }}
            key={item.id}
          >
            <span
              className="position-absolute top-0 start-0 translate-middle border rounded-circle bg-dark"
              style={{ backgroundColor: "white", cursor: "pointer" }}
            >
              <img
                src={`https://dummyjson.com/icon/${item.title}/150`}
                alt=""
                width={50}
              />
              {/* <RxAvatar color="white" size={50} /> */}
            </span>
            <img
              src={`https://dummyjson.com/image/400x200/008080/ffffff?fontFamily=pacifico&text=${item.title}&fontSize=25`}
              width={70}
              height={300}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body bg-dark text-white">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.body}</p>
              <div className="card-tags">
                {item.tags.map((tag) => (
                  <span className="badge text-bg-primary me-2" key={tag}>
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="buttons mt-3 d-flex justify-content-evenly p-1">
                <button className="btn btn-primary w-40">
                  <BiLike size={20} />
                  {item.reactions.likes} likes
                </button>
                <button className="btn btn-primary w-40">
                  <BiShare size={20} />
                  {item.reactions.dislikes}
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default YourPosts;
