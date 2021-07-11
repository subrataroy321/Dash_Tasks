import React from 'react'
import styled from 'styled-components'
import StudentList from './components/StudentList';

function App() {
  return (
    <MainWrapper>
      <h2>Student List Using React Functional components</h2>
      <StudentList />
    </MainWrapper>
  );
}

export default App;

const MainWrapper = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap');
  text-align: center;
  h2 {
    font-family: 'Indie Flower', cursive;
    padding: 30px;
    font-size: 3em;
  }
`