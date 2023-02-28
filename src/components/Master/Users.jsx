import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Users() {

    const [id, setId] = useState("")


    const [data, setData] = useState({
        name: "",
        email:"",
        username:"",
        password:"",
        mobileno:"",
        usertype:""
    })

    const [newdata, setNewData] = useState([])

    function loadData() {
        axios.get("http://localhost:8081/users")
            .then((res) => {
                setNewData(res.data.data)
                console.log(res.data.data);
            })
    }

    function handleChange(e) {
        e.preventDefault()
        setData({ ...data, [e.target.id]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (id === "") {

            axios.post("http://localhost:8081/users", data)
                .then((res) => {
                    console.log(res.data);
                    loadData();
                    successNotify();
                })
        }
        else {
            axios.put("http://localhost:8081/users/" + id, data)
                .then((res) => {
                    console.log(res.data);
                    loadData();
                    warningNotify();
                });
        }

    }

    useEffect(() => {
        loadData()
    }, []);

    function handleEdit(e, _id) {
        e.preventDefault()
        setId(_id);
        axios.get("http://localhost:8081/users/" + _id)
            .then((res) => {
                console.log(data);
                setData({
                    name: res.data.data.name,
                    email: res.data.data.email,
                    username: res.data.data.username,
                    mobileno: res.data.data.mobileno,
                    password: res.data.data.password,
                    usertype: res.data.data.usertype,
                })
            }
            )
    }

    function handleDelete(e, _id) {
        e.preventDefault()
        deleteNotify();
        axios.delete("http://localhost:8081/users/" + _id)
            .then((res) => {
                console.log(res.data);
                loadData()
            })
    }

    function successNotify() {
        toast.success('Data Saved Succesfully', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    function warningNotify() {
        toast.warn('Data Updated Succesfully', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    function deleteNotify() {
        toast.error('Data Deleted Successfully', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    return (
        <div>
            <div className="app-page-title">
                <div className="page-title-wrapper">
                    <div className="page-title-heading">
                        <div>Cities
                        </div>
                    </div>
                    <div className="page-title-actions">
                        <label className='text-danger'>Count - 10</label>
                    </div>
                </div>
            </div>



            <div className="col-lg-12">
                <div className="card">
                    <div className="card-body">

                        <div className="position-relative form-group">
                            <div className="row">
                                <div className="col-lg-6">
                                    <label >Name <span className='text-danger'>*</span></label>
                                    <input id="name" value={data.name} onChange={(e) => handleChange(e)} placeholder="" type="text" className="form-control" />
                                </div>
                                <div className="col-lg-6">
                                    <label >Email <span className='text-danger'>*</span></label>
                                    <input id="email" value={data.email} onChange={(e) => handleChange(e)} placeholder="" type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-lg-6">
                                    <label >Username <span className='text-danger'>*</span></label>
                                    <input id="username" value={data.username} onChange={(e) => handleChange(e)} placeholder="" type="text" className="form-control" />
                                </div>
                                <div className="col-lg-6">
                                    <label >Password <span className='text-danger'>*</span></label>
                                    <input id="password" value={data.password} onChange={(e) => handleChange(e)} placeholder="" type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-lg-6">
                                    <label >Mobile No. <span className='text-danger'>*</span></label>
                                    <input id="mobileno" value={data.mobileno} onChange={(e) => handleChange(e)} placeholder="" type="text" className="form-control" />
                                </div>
                                <div className="col-lg-6">
                                    <label >User Type <span className='text-danger'>*</span></label>
                                    <input id="usertype" value={data.usertype} onChange={(e) => handleChange(e)} placeholder="" type="text" className="form-control" />
                                </div>
                            </div>
                        </div>
                        <button type='submit' onClick={(e) => handleSubmit(e)} className="mt-1 btn btn-primary">Submit</button>

                    </div>
                </div>
            </div>


            <div className="col-lg-12 mt-3">
                <div className="card">
                    <div className="card-body">
                        <table class="table table-hover table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th style={{ width: "130px" }}>Action</th>
                                    <th style={{ width: "80px" }}>No.</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Username</th>
                                    <th>Mobile No.</th>
                                    <th>Password</th>
                                    <th>User Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    newdata.map((eachData, i) => {
                                        return (
                                            <tr key={i}>
                                                <td>
                                                    <button class="mb-2 mr-2 btn-icon btn-icon-only btn-pill btn btn-primary"
                                                        onClick={(e) => handleEdit(e, eachData._id)}><i class="pe-7s-tools btn-icon-wrapper">
                                                        </i></button>
                                                    <button class="mb-2 mr-2 btn-icon btn-icon-only btn-pill btn btn-danger "
                                                        onClick={(e) => handleDelete(e, eachData._id)}><i class="pe-7s-trash btn-icon-wrapper">
                                                        </i></button>
                                                </td>
                                                <td className="text-center">{i + 1}</td>
                                                <td>{eachData.name}</td>
                                                <td>{eachData.email}</td>
                                                <td>{eachData.username}</td>
                                                <td>{eachData.mobileno}</td>
                                                <td>{eachData.password}</td>
                                                <td>{eachData.usertype}</td>
                                            </tr>

                                        )

                                    })
                                }
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>

            <ToastContainer />
        </div>
    )
}

