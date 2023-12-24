import React from "react"
function BookTable({newArray,handleDelete}){
    return(
        <>
        { newArray.map((data,index)=>(
            <tr key={index}>
                <td>{data.bookName}</td>
                <td>{data.author}</td>
                <td>{data.isbn}</td>
                <td onClick={()=>handleDelete(data.isbn)}><button>Delete</button></td>
            </tr>
        ))}
        </>
    )
}
export default BookTable;