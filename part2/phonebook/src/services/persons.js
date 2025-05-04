import axios from "axios";

const personsUrl = "http://localhost:3001/persons";

export const getPerson = () => {
    return axios.get(personsUrl).then(response => response.data);
}

export const addPerson = (newPerson) => {
    return axios.post("http://localhost:3001/persons", newPerson)
    .then(res => res.data)
}

export const modifyPerson = (person) => {
    return axios.put(`http://localhost:3001/persons/${person.id}`, person)
    .then(res => res.data)
}

export const deletePerson = (id) => {
    return axios.delete(`http://localhost:3001/persons/${id}`)
    .then(res => res.data)
}