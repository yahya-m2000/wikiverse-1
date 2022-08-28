import React, {useState, useEffect} from 'react';
import apiURL from '../api';

export const AddPage = ({setCurrentPage}) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [tags, setTags] = useState('')

    const handleSubmit = e => {
    e.preventDefault()
    setTitle('')
    setContent('')
    setName('')
    setEmail('')
    setTags('')
    }

    return (
    <div>
    <form onSubmit={handleSubmit}>
        <h1>Add a Page</h1>
        <label></label>
        <input type='test' placeholder='title' value= {title} onChange={e => setTitle(e.target.value)}/><br></br>
        <input type='test' placeholder='Article Content' value={content} onChange={e => setContent(e.target.value)}/><br></br>
        <input type='test' placeholder='Author Name' value={name} onChange={e => setName(e.target.value)}/><br></br>
        <input type='test' placeholder='Author Email' value={email} onChange={e => setEmail(e.target.value)}/><br></br>
        <input type='test' placeholder='Tags' value={tags} onChange={e => setTags(e.target.value)}/><br></br>

        <button onClick={() => 
            setCurrentPage(0)
        }>Create Page</button>
    </form>
    </div>
    );
}