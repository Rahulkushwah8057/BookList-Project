import React, { useEffect, useState } from "react";
import BookTable from "./BookTable";
function BookList() {
    const getLSData=()=>{
        const LSdata = localStorage.getItem("LSData")
        if(LSdata){
            return JSON.parse(LSdata)            
        }
        else{
            return []
        }
        

    }
  const [formData, setFormData] = useState({
    bookName: "",
    author:"",
    isbn:""
  });
  const [newArray, setNewArray] = useState(getLSData);
  const handelChnage = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.bookName === "" || formData.author === "" || formData.isbn === "" ){
        alert("All Field Are Mandatory")
    }else{
        setNewArray([...newArray, formData]);
        setFormData({
            bookName: "",
        author:"",
        isbn:""        
        })
    }
   
  };
  const handleDelete =(isbn)=>{
    const filteredData = newArray.filter((data)=>(data.isbn !== isbn))
    setNewArray(filteredData)
  }
  useEffect(()=>{
    localStorage.setItem("LSData", JSON.stringify(newArray))
  },[newArray])
  return (
    <>
      <form onSubmit={handleSubmit}>
        BooKName{" "}
        <input
          type="text"
          value={formData.bookName}
          name="bookName"
          onChange={handelChnage}
          placeholder="bookName"
        />
        Author{" "}
        <input
          type="text"
          value={formData.author}
          name="author"
          onChange={handelChnage}
          placeholder="Author"
        />
        ISBN{" "}
        <input
          type="text"
          value={formData.isbn}
          name="isbn"
          onChange={handelChnage}
          placeholder="ISBN"
        />
        <button type="submit">Add</button>
      </form>
      <table>
        <tr>
            <th>BookName</th>
            <th>Author</th>
            <th>ISBN#</th>
        </tr>
        <BookTable newArray={newArray} handleDelete={handleDelete}/>
      </table>
    </>
  );
}
export default BookList;
