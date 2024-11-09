import React, { useRef, useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth, db } from "../config/firebase/firebaseconfig.js";
import { useNavigate } from "react-router-dom";
import { collection, addDoc, getDocs,doc, deleteDoc, query, where   } from "firebase/firestore";

function Home() {
  const [todo, setTodo] = useState([]);


  useEffect(() => {
    
    const retrieveDataofFirestore = async () => {
      const q = query(
        collection(db, "todo"),
        where("uid", "==", auth.currentUser.uid)
      );

      const querySnapshot = await getDocs(q);
      const newTodos = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        did: doc.id,
      }));
      setTodo(newTodos);
      
    };
    

    

  retrieveDataofFirestore();
  }, [])
  

  const navigate = useNavigate();
  function logOut() {
    signOut(auth)
      .then(() => {
        console.log("User is signout");
        navigate("/login");
      })
      .catch((error) => {
        console.log("not signout yet" + error);
      });
  }

  const deletedoc = async (did) => {
    try{
      await deleteDoc(doc(db, "todo", did));
      const updatedTodos = todo.filter(item => item.did !== did);
      setTodo(updatedTodos);
    }
    catch (error) {
      console.error(`Error deleting document: ${error}`);
  }
}

  const todoInput = useRef();

  const addtodo = async (event) => {
    event.preventDefault();
  
    console.log(todoInput.current.value);
  
    try {
      const docRef = await addDoc(collection(db, "todo"), {
        title: todoInput.current.value,
        uid: auth.currentUser.uid,
      });
  
      setTodo((prevTodos) => [
        ...prevTodos,
        {
          title: todoInput.current.value,
          uid: auth.currentUser.uid,
          did: docRef.id,
        },
      ]);
  
  
      console.log("Document written with ID: ", docRef.id);
      console.log("in a database");
    } catch (e) {
      console.error("Error adding document: ");
    }
  };
  

  return (
    <>
     <div>
      <h1 className='text-center font-bold text-xl mt-10'>ToDo App</h1>
      
      <div className='flex justify-center items-center gap-10 mt-4'>
        
        <form onSubmit={addtodo}>
          <input className="h-10 rounded text-xl border-black border border-2 p-2" type="text" placeholder="Enter todo " ref={todoInput}/>
          <button type="submit" className="btn btn-outline btn-accent ml-4">
              Add To Do
             </button>
        </form>
        </div>
        <div>
          <div className="flex justify-center items-center gap-10">
        <ol className="text-center mr-80 font-bold ">
          {todo.length > 0 ? todo.map((item)=>{
            return <li key={item.docid}>{item.title}</li>
          }): <h1>No Data Found...</h1>}
        </ol>
        
        </div>
      </div>
      <div className="flex justify-center items-center">
      <button className="w-20 h-10  btn btn-outline btn-success mt-4 " onClick={logOut}>Logout</button>
      </div>
    </div>
        </>
  );
}

export default Home;
