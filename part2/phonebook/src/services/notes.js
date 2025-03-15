import axios from "axios";

const notesUrl = "http://localhost:3001/persons";

export const getNotes = () => {
    return axios.get(notesUrl).then(response => response.data);
}

export const addNote = (newPerson) => {
    return axios.post("http://localhost:3001/persons", newPerson)
    .then(res => res.data)
}

export const deleteNote = (id) => {
    return axios.delete(`http://localhost:3001/persons/${id}`)
    .then(res => res.data)
}