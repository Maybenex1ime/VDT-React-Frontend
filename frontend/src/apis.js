import axios from "axios";

// const port = process.env.REACT_APP_PORT_API;
const BASE_URL = `http://localhost:5000/api`;

export const getStudent = (id) => axios.get(`${BASE_URL}/students/${id}`);

export const updateStudent = (id, newStudent) =>
    axios.put(`${BASE_URL}/students/${id}`, newStudent);

export const addStudent = (student) =>
    axios.post(`${BASE_URL}/students`, student);