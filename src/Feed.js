import React, { useEffect, useState } from "react";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import ImageIcon from "@mui/icons-material/Image";
import CreateIcon from "@mui/icons-material/Create";
import "./Feed.css";
import InputOption from "./InputOption";
import Post from "./Post";
import { db } from "./firebase";
import firebase from "firebase/compat/app";
function Feed() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    // the snapshot is a realtime lisnter to the database. everytime the change is made to the database, snapshot fetches that result in realtime
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          // in the collections we have a docs
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);
  const sendPost = (e) => {
    e.preventDefault();
    // console.log(firebase.firestore.FieldValue.serverTimestamp());
    db.collection("posts").add({
      name: "Ayyaz Ahmad",
      description: "this is a test decsription",
      message: input,
      photoUrl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form action="">
            <input
              value={input}
              onChange={(e) => {
                console.log(e.target.value);
                setInput(e.target.value);
              }}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#7085f9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#e7a33e" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#c0cbcd" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#7fc15e"
          />
        </div>
      </div>
      {/* Posts */}
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
    </div>
  );
}

export default Feed;
