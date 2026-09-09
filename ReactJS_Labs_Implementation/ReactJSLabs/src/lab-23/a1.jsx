// WAP to do CRUD operation on products stored as array using ReactJS

import { useState } from "react";

export default function ProductCrud() {

    const [data, setData] = useState({
        productName: "",
        category: "",
        price: "",
        quantity: "",
        image: ""
    });

    const [productList, setProductList] = useState([]);

    const [editIndex, setEditIndex] = useState(null);

    // Add / Update Product
    const handleClick = () => {

        if (
            !data.productName ||
            !data.category ||
            !data.price ||
            !data.quantity
        ) {
            alert("All fields are required");
            return;
        }

        // Update
        if (editIndex !== null) {

            const updatedList = [...productList];

            updatedList[editIndex] = data;

            setProductList(updatedList);

            setEditIndex(null);
        }
        else {
            // Add
            setProductList([
                ...productList,
                { ...data }
            ]);
        }

        // Clear Input Fields
        setData({
            productName: "",
            category: "",
            price: "",
            quantity: "",
            image: ""
        });
    };

    // Edit Product
    const handleEdit = (index) => {
        setData(productList[index]);
        setEditIndex(index);
    };

    // Delete Product
    const handleDelete = (index) => {

        const updatedList = [
            ...productList.slice(0, index),
            ...productList.slice(index + 1)
        ];

        setProductList(updatedList);

        // ["Laptop", "Mouse", "Keyboard", "Monitor"]
        //      ↑         ↑          ↑          ↑
        //     0         1          2          3
        //               ❌
        //             DELETE

        // slice(0, 1)
        // ["Laptop"]

        // slice(2)
        // ["Keyboard", "Monitor"]
        // Combine:

        // ["Laptop"] + ["Keyboard", "Monitor"]

        //         ↓

        // ["Laptop", "Keyboard", "Monitor"]

        // Reset Form if editing deleted row
        if (editIndex === index) {

            setEditIndex(null);

            setData({
                productName: "",
                category: "",
                price: "",
                quantity: "",
                image: ""
            });
        }
    };

    // Display Records
    const records = productList.map( (item, index) => {
            return (
                <tr key={index}>
                    <td>{index + 1}</td>

                    <td>
                        <img src={item.image} alt="" />
                    </td>

                    <td>{item.productName}</td>

                    <td>{item.category}</td>

                    <td>₹{item.price}</td>

                    <td>{item.quantity}</td>

                    <td>
                        <button
                            onClick={() => { handleEdit(index); }}
                            className="btn btn-success"
                            style={{ marginRight: 20 }}
                        >
                            Edit
                        </button>

                        <button
                            onClick={() => {
                                handleDelete(index);
                            }}
                            className="btn btn-danger"
                        >
                            Delete
                        </button>
                    </td>
                </tr>
            );
        }
    );

    return (
        <>
           

            <div className="container ">

                <h1>Product CRUD Operation</h1>

                <div className="form">

                    <label>
                        Product Name :
                    </label>

                    <input
                        type="text"
                        placeholder="Enter Product Name"
                        value={data.productName}
                        onChange={(e) =>setData({...data, productName:e.target.value})}
                    />
                    <br/>

                    <label>
                        Category :
                    </label>

                    <input
                        type="text"
                        placeholder="Enter Category"
                        value={data.category}
                        onChange={(e) =>
                            setData({...data, category: e.target.value})}
                    />

                    <br />

                    <label>
                        Price :
                    </label>

                    <input
                        type="number"
                        placeholder="Enter Price"
                        value={data.price}
                        onChange={(e) =>
                            setData({ ...data, price: e.target.value})}
                    />

                    <br/>
                    <label>
                        Quantity :
                    </label>

                    <input
                        type="number"
                        placeholder="Enter Quantity"
                        value={data.quantity}
                        onChange={(e) => setData({ ...data, quantity:  e.target.value })}
                    />

                    <br />

                    <label>
                        Image URL :
                    </label>

                    <input
                        type="text"
                        placeholder="Enter Image URL"
                        value={data.image}
                        onChange={(e) => setData({...data, image:  e.target.value}) }
                    />

                    <br />

                    <button onClick={handleClick} className="btn btn-primary custom-btn">
                        { editIndex === null ? "ADD PRODUCT": "UPDATE PRODUCT" }
                    </button>

                </div>

                <table className="table table-striped table-success">

                    <thead>
                        <tr className="table-dark">

                            <th>ID</th>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Action</th>

                        </tr>
                    </thead>

                    <tbody>
                        {records}
                    </tbody>

                </table>
            </div>
        </>
    );
}
{/* <style> */}
{`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    background:linear-gradient(
        135deg,
        #dbeafe,
        #f0f9ff
    );
    font-family:Arial, sans-serif;
}

.container{
    width:90%;
    max-width:1200px;
    margin:40px auto;
    background:#fff;
    padding:35px;
    border-radius:20px;
    box-shadow:
    0 10px 30px rgba(0,0,0,0.1);
}

h1{
    text-align:center;
    margin-bottom:30px;
    color:#1e293b;
    font-size:35px;
    font-weight:bold;
}

/* Form Styling */
.form-container{
    background:#f8fafc;
    padding:25px;
    border-radius:15px;
    box-shadow:
    inset 0 0 10px rgba(0,0,0,0.05);
    margin-bottom:30px;
}

label{
    font-weight:600;
    color:#334155;
    display:inline-block;
    width:150px;
    margin-top:15px;
}

input{
    width:320px;
    padding:12px 15px;
    border:1px solid #cbd5e1;
    border-radius:10px;
    outline:none;
    transition:0.3s;
    font-size:15px;
    margin-bottom:15px;
}

input:focus{
    border-color:#2563eb;
    box-shadow:
    0 0 8px rgba(37,99,235,0.3);
}

/* Image Preview */
img{
    height:90px;
    width:120px;
    object-fit:cover;
    border-radius:10px;
    border:2px solid #ddd;
}

/* Button Styling */
.custom-btn{
    padding:12px 25px;
    border:none;
    border-radius:10px;
    font-size:16px;
    font-weight:bold;
    cursor:pointer;
    transition:0.3s;
    margin-top:15px;
}

.custom-btn:hover{
    transform:translateY(-2px);
}

/* Table Styling */
table{
    margin-top:30px;
    border-radius:15px;
    overflow:hidden;
    box-shadow:
    0 5px 15px rgba(0,0,0,0.08);
}

table th{
    background:#1e293b !important;
    color:white !important;
    text-align:center;
    padding:15px;
}

table td{
    text-align:center;
    vertical-align:middle;
    padding:15px !important;
}

.table-striped tbody tr:nth-child(even){
    background:#f8fafc;
}

.table-striped tbody tr:hover{
    background:#dbeafe;
    transition:0.3s;
}
`}
{/* </style> */}