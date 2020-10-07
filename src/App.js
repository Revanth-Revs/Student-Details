import React from "react";
import "./styles.css";
import StudentList from "./StudentList";
import StudentDetail from "./StudentDetail";

import { Box } from "@material-ui/core";

export default function App() {
  const studentList = [
    {
      name: "Revanth",
      id: 1,
      hobby: "Gaming",
      aboutMe: "I love to Create Games"
    },
    {
      name: "Vivek",
      id: 2,
      hobby: "Painting",
      aboutMe: "I love to Paint Portraits"
    },
    {
      name: "Sasank",
      id: 3,
      hobby: "Music",
      aboutMe: "I love to Play Flute"
    },
    {
      id: 4,
      name: "Raju",
      hobbies: "Reading Books",
      aboutMe: "I love to Read Mystery Novels"
    },
    {
      id: 5,
      name: "Mounica",
      hobbies: "Singing",
      aboutMe: "I love to Sing"
    },
    {
      id: 6,
      name: "Yashu",
      hobbies: "Dance",
      aboutMe: "I love to Dance"
    },
    {
      id: 7,
      name: "Lekha",
      hobbies: "Drawing",
      aboutMe: "I love to Draw Potraits"
    }
  ];

  const [student, setStudent] = React.useState({});
  const [filterValue, setFilterValue] = React.useState("");

  const handleClick = (student) => setStudent(student);

  const handleChange = (event) => {
    setStudent({});
    setFilterValue(event.target.value);
  };

  return (
    <Box display={"flex"}>
      <StudentList
        students={studentList.filter((student) =>
          student.name.toLowerCase().includes(filterValue.toLowerCase())
        )}
        onClick={handleClick}
        onChange={handleChange}
      />

      <StudentDetail student={student} />
    </Box>
  );
}
