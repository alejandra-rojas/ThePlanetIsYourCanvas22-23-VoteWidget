import React from "react";
//import { useAuthState } from "react-firebase-hooks/auth";
import { useAuthContext } from "./hooks/useAuthContext";
import { auth, db } from "../firebase/config";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";

export default function VoteEntry({ id, votes }) {
  const { user } = useAuthContext(auth);

  const votesRef = doc(db, "ilustracion", id);

  const handleLike = () => {
    if (votes?.includes(user.uid)) {
      updateDoc(votesRef, {
        votes: arrayRemove(user.uid),
      })
        .then(() => {
          console.log("unvoted");
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      updateDoc(votesRef, {
        votes: arrayUnion(user.uid),
      })
        .then(() => {
          console.log("voted");
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  return (
    <div className="counter">
      <i
        className={`fa ${
          !votes?.includes(user.uid) ? "-regular" : "-solid"
        } fa-thumbs-up ${!votes?.includes(user.uid) ? "" : "wobble-ver-left"}`}
        style={{
          display: "inline",
          cursor: "pointer",
          fontSize: "1.5rem",
          color: votes?.includes(user.uid) ? "#E5915D" : "#546DA8",
        }}
        onClick={handleLike}
      />
      <div className="votes-number">{votes?.length}</div>
    </div>
  );
}
