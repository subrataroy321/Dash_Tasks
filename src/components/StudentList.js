import React from 'react'
import styled from 'styled-components'

function StudentList() {

    var studentArray = [
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
    ]


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
                                <input type="number" name="class" className="form-control" />
                            </td>
                            <td>Class</td>
                            <td>
                                <input type="text" name="class" className="form-control" />
                            </td>
                            <td>Division</td>
                            <td>
                                <input type="text" name="class" className="form-control" />
                            </td>
                        </tr>
                        <tr>
                            <td>Full Name</td>
                            <td colspan="6">
                                <input type="text" name="class" className="form-control" />
                            </td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td colspan="6">
                                <input type="text" name="class" className="form-control" />
                            </td>
                        </tr>
                        <tr>
                            <td>Contact Email</td>
                            <td colspan="3">
                                <input type="email" name="class" className="form-control" />
                            </td>
                            <td>Contact Phone</td>
                            <td colspan="2">
                                <input type="number" name="class" className="form-control" />
                            </td>
                        </tr>
                        <tr>
                            <td>Math</td>
                            <td>
                                <input type="number" name="class" className="form-control" />
                            </td>
                            <td>Science</td>
                            <td>
                                <input type="number" name="class" className="form-control" />
                            </td>
                            <td>English</td>
                            <td>
                                <input type="number" name="class" className="form-control" />
                            </td>
                        </tr>
                    </tbody>
                </table>
                        <input type="button" value="Add Student" className="btn btn-primary"/>
            </AddStudentWrapper>

            <StudentTableWrapper>
                <table className="table table-hover table-success">
                    <thead>
                        <tr>
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
                                    <input type="button" value="edit" className="btn btn-link"/>
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
`
const StudentTableWrapper = styled.div`
    padding: 30px;
`
