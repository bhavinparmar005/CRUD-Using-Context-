import React, { createContext, useContext, useState } from 'react'
import Swal from 'sweetalert2'

let crud = createContext()
const Crudprovider = ({ children }) => {

    const [data, setData] = useState([])


    const additem = (item) => {



        setData((pre) => [...pre, item])



    }

    const update = (upData) => {

        setData((pre) => pre.map((val) => {
            return (
                val.id == upData.id ? upData : val
            )
        }))


        // console.log(upData);


    }

    const deleteData = (id) => {

        let deleteItem = data.filter((val)=>{
            return val.id != id
        })
    
        Swal.fire({
            title: "Delete User Information Successfully !",
            icon: "success",
            draggable: true,
            showConfirmButton: false,
            timer: 1900
        });
        setData(deleteItem)

}


    console.log(data);


    return (

        <crud.Provider value={{ additem, data, setData, update, deleteData }}>
            {children}
        </crud.Provider>
    )
}


const useCrud = () => {
    return useContext(crud)
}
export { Crudprovider, useCrud } 
