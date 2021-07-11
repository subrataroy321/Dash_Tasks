import React, { useState } from 'react'
import styled from 'styled-components'

function StudentList() {
    // State Valiables
    const [studentClass, setStudentClass] = useState('');
    const [division, setDivision] = useState('');
    const [roll_no, setRoll_no] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [math, setMath] = useState(0);
    const [science, setScience] = useState(0);
    const [english, setEnglish] = useState(0);
    const [isEdited, setIsEdited] = useState(false)
    const [isAdding, setIsAdding] = useState(false)

    const [studentArray, setStudentArray] = useState([
        {
            class: "V", 
            division: "A", 
            roll_no:1, 
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
            roll_no:2, 
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
            roll_no:3, 
            name: "Priyanka Das",
            address: "Atlanta, GA",
            contact_email: "priyanka.das@gmail.com",
            contact_phone: "678-111-9043",
            math: 96,
            science: 97,
            english: 89

        }
    ])

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
        if (!isEdited) {
            setStudentArray([newStudent, ...studentArray]);
            cancelEditing()
        }else {
            updateStudent()
        }

    }

    const editStudent = (student) => {
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
    


    return (
        <StudentListWrapper>
            <AddStudentWrapper>
                <h4>Add a Student</h4>
                <table className="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td>Roll No</td>
                            <td>
                                <input type="number" name="roll_no" className="form-control" value={roll_no} onChange={(e)=>setRoll_no(e.target.value)}/>
                            </td>
                            <td>Class</td>
                            <td>
                                <input type="text" name="class" className="form-control" value={studentClass} onChange={(e)=>setStudentClass(e.target.value)}/>
                            </td>
                            <td>Division</td>
                            <td>
                                <input type="text" name="division" className="form-control" value={division} onChange={(e)=>setDivision(e.target.value)}/>
                            </td>
                        </tr>
                        <tr>
                            <td>Full Name</td>
                            <td colspan="6">
                                <input type="text" name="name" className="form-control" value={name} onChange={(e)=>setName(e.target.value)}/>
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
                                <input type="text" name="phone" className="form-control" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
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
                                    <input type="button" value="delete" className="btn btn-link"/>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </StudentTableWrapper>
        </StudentListWrapper>
    )
}

export default StudentList

const StudentListWrapper = styled.div``
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
