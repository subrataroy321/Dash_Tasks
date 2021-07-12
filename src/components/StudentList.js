import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

function StudentList() {
    // State Valiables
    const [studentClass, setStudentClass] = useState('');
    const [division, setDivision] = useState('');
    const [roll_no, setRoll_no] = useState(0);
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [math, setMath] = useState(0);
    const [science, setScience] = useState(0);
    const [english, setEnglish] = useState(0);
    const [isEdited, setIsEdited] = useState(false);
    const [isAdding, setIsAdding] = useState(false);
    const [displayPopUp, setDisplayPopUp] = useState('none')

    const [studentArray, setStudentArray] = useState([
        {
            class: "V", 
            division: "A", 
            roll_no:140128, 
            name: "Subrata Roy",
            address: "Atlanta, GA",
            contact_email: "subrata.roy@gmail.com",
            contact_phone: "678-111-1234",
            math: 95,
            science: 96,
            english: 98

        },
        {
            class: "VI", 
            division: "A", 
            roll_no:223159, 
            name: "Sajal Roy",
            address: "Atlanta, GA",
            contact_email: "sajal.roy@gmail.com",
            contact_phone: "678-111-5678",
            math: 95,
            science: 86,
            english: 91

        },
        {
            class: "V", 
            division: "A", 
            roll_no:345123, 
            name: "Priyanka Das",
            address: "Atlanta, GA",
            contact_email: "priyanka.das@gmail.com",
            contact_phone: "678-111-9043",
            math: 96,
            science: 97,
            english: 89

        }
    ])

    useEffect(() => {
        generateRollNo();
    }, [isAdding])

    const generateRollNo = () => {
        var roll = Math.floor(Math.random(1)*999999);
        if (roll.toString().length === 6) {
            setRoll_no(roll)
        }else {
            generateRollNo();
        }
    }

    var newStudent = {
        class: studentClass, 
        division: division, 
        roll_no: roll_no, 
        name: name,
        address: address,
        contact_email: email,
        contact_phone: phone,
        math: math,
        science: science,
        english: english

    }
    
    const addNewStudent = () => {
        var data = studentArray;
        if (!isEdited && data.filter(student => student.roll_no !== roll_no)) {
            setStudentArray([newStudent, ...studentArray]);
            cancelEditing()
        }else {
            updateStudent()
        }
    }

    const editStudent = (student) => {
        setIsAdding(true)
        setIsEdited(true)
        setStudentClass(student.class);
        setDivision(student.division);
        setRoll_no(student.roll_no);
        setName(student.name);
        setAddress(student.address);
        setEmail(student.contact_email);
        setPhone(student.contact_phone);
        setMath(student.math);
        setScience(student.science);
        setEnglish(student.english);
    }

    const cancelEditing = () => {
        setIsAdding(false)
        setIsEdited(false)
        setStudentClass('');
        setDivision('');
        setRoll_no('');
        setName('');
        setAddress('');
        setEmail('');
        setPhone('');
        setMath(0);
        setScience(0);
        setEnglish(0);
    }

    const updateStudent = () => {
        var data = studentArray;
        var indexOfStudent = data.findIndex(student => student.roll_no === roll_no)
        if (indexOfStudent !== null) {
            data[indexOfStudent].class = studentClass;
            data[indexOfStudent].division = division;
            data[indexOfStudent].name = name;
            data[indexOfStudent].address = address;
            data[indexOfStudent].contact_email = email;
            data[indexOfStudent].contact_phone = phone;
            data[indexOfStudent].math = math;
            data[indexOfStudent].science = science;
            data[indexOfStudent].english = english;

        }
        setStudentArray(data);
        cancelEditing()
    }

    const deleteStudent = (e) => {
        if (roll_no && e.target.value === "delete") {
            var data = studentArray;
            data = data.filter(student => student.roll_no !== roll_no)
            setStudentArray(data)
        }
        setDisplayPopUp("none");
    }

    const showPopUp = (roll_no) => {
        setDisplayPopUp("block");
        setRoll_no(roll_no);
    }

    window.onclick = function(event) {
        if (event.target.id === "myModal") {
          setDisplayPopUp("none");
        }
      }

    return (
        <StudentListWrapper>
                    <input tybe="button" value="Add a Student" className="btn btn-dark" style={{ marginBottom: "20px"}} onClick={() => isAdding ? setIsAdding(false) : setIsAdding(true)}/>
            <AddStudentWrapper style={{display: `${isAdding ? "" : "none"}`}}>
                <div>
                    <table className="table">
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td>Roll No</td>
                                <td>
                                    <input type="number" name="roll_no" className="form-control" value={roll_no} onChange={(e)=>setRoll_no(e.target.value)} readOnly="true"/>
                                </td>
                                <td>Class</td>
                                <td>
                                    <input type="text" name="class" className="form-control" value={studentClass} onChange={(e)=>setStudentClass(e.target.value)} required/>
                                </td>
                                <td>Division</td>
                                <td>
                                    <input type="text" name="division" className="form-control" value={division} onChange={(e)=>setDivision(e.target.value)} required/>
                                </td>
                            </tr>
                            <tr>
                                <td>Full Name</td>
                                <td colspan="6">
                                    <input type="text" name="name" className="form-control" value={name} onChange={(e)=>setName(e.target.value)} required/>
                                </td>
                            </tr>
                            <tr>
                                <td>Address</td>
                                <td colspan="6">
                                    <input type="text" name="address" className="form-control" value={address} onChange={(e)=>setAddress(e.target.value)}/>
                                </td>
                            </tr>
                            <tr>
                                <td>Contact Email</td>
                                <td colspan="3">
                                    <input type="email" name="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                                </td>
                                <td>Contact Phone</td>
                                <td colspan="2">``
                                    <input type="text" name="phone" className="form-control" value={phone} onChange={(e)=>setPhone(e.target.value)} required/>
                                </td>
                            </tr>
                            <tr>
                                <td>Math</td>
                                <td>
                                    <input type="number" name="math" className="form-control" value={math} onChange={(e)=>setMath(e.target.value)}/>
                                </td>
                                <td>Science</td>
                                <td>
                                    <input type="number" name="science" className="form-control" value={science} onChange={(e)=>setScience(e.target.value)}/>
                                </td>
                                <td>English</td>
                                <td>
                                    <input type="number" name="english" className="form-control" value={english} onChange={(e)=>setEnglish(e.target.value)}/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                        {
                            isEdited ? 
                            <div>
                                <input type="button" value={isEdited? "Update" : "Add" } className={isEdited? "btn btn-danger" : "btn btn-primary"} onClick={() => addNewStudent()}/>
                                <input type="button" value="Cancel" className="btn btn-light" onClick={() => cancelEditing()}/>
                            </div>
                            :
                            <input type="button" value={isEdited? "Update" : "Add" } className={isEdited? "btn btn-denger" : "btn btn-primary"} onClick={() => addNewStudent()}/>
                        }
                </div>
            </AddStudentWrapper>

            <StudentTableWrapper>
                <table className="table table-hover table-success">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class</th>
                            <th>Division</th>
                            <th>Roll No</th>
                            <th>Full Name</th>
                            <th>Address</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Math</th>
                            <th>Science</th>
                            <th>Engish</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentArray.map((student, i) => 
                            <tr key={i}>
                                <td>{++i}</td>
                                <td>{student.class}</td>
                                <td>{student.division}</td>
                                <td>{student.roll_no}</td>
                                <td>{student.name}</td>
                                <td>{student.address}</td>
                                <td>{student.contact_email}</td>
                                <td>{student.contact_phone}</td>
                                <td>{student.math}</td>
                                <td>{student.science}</td>
                                <td>{student.english}</td>
                                <td>
                                    <input type="button" value="edit" className="btn btn-link" onClick={() => editStudent(student)}/>
                                </td>
                                <td>
                                    <input type="button" value="delete" className="btn btn-link" onClick={() => showPopUp(student.roll_no)}/>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </StudentTableWrapper>
            <PopUpWrapper id="myModal" className="modal" style={{ display: `${displayPopUp}`}}>

                <div className="modal-content">
                    <span className="close" onClick={() => setDisplayPopUp("none")}>&times;</span>
                    <h3>Do you want to delete?</h3>
                    <a>
                        <input type="button" className="btn btn-danger" style={{marginLeft: "20px", marginRight: "20px"}} value="delete" onClick={(e) => deleteStudent(e)}/>
                        <input type="button" className="btn btn-secondary"  style={{marginLeft: "20px", marginRight: "20px"}} value="cancel" onClick={() => setDisplayPopUp("none")}/>

                    </a>
                </div>

            </PopUpWrapper>
        </StudentListWrapper>
    )
}

export default StudentList

const StudentListWrapper = styled.div`

    /* The Modal (background) */
    .modal {
        display: none; /* Hidden by default */
        position: fixed; /* Stay in place */
        z-index: 1; /* Sit on top */
        padding-top: 100px; /* Location of the box */
        left: 0;
        top: 0;
        width: 100%; /* Full width */
        height: 100%; /* Full height */
        overflow: auto; /* Enable scroll if needed */
        background-color: rgb(0,0,0); /* Fallback color */
        background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    }

    /* Modal Content */
    .modal-content {
        background-color: #fefefe;
        margin: auto;
        padding: 20px;
        border: 1px solid #888;
        width: 80%;
    }

    /* The Close Button */
    .close {
        color: #aaaaaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
    }

    .close:hover,
    .close:focus {
        color: #000;
        text-decoration: none;
        cursor: pointer;
    }
`
const PopUpWrapper = styled.div`
    
`
const AddStudentWrapper = styled.div`
    padding: 30px;
    text-align: center;
    border: solid 2px gray;
    background-color: #eed294;
    .btn {
        margin-left: 20px;
        margin-right: 20px;
    }
`
const StudentTableWrapper = styled.div`
    padding: 30px;
`
