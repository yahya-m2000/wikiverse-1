import React, {useState, useEffect} from 'react';
import apiURL from '../api';

export const Page = ({page, setViewPage, setCurrentPage}) => {

  const [author, setAuthor] = useState({})

  async function fetchAuthor(){
    try {
      // did a little searching, but if you go to the server/routes/users, there's a GET route that can retrieve a user. i won't lie, i did see this code from Jordan, but at least i understand it :)
      const response = await fetch(`${apiURL}/users/${page.authorId}`)
      const data = await response.json()
      setAuthor(data)
    } catch (err) {
      console.log("Oh no an error!", err)
    }
  }


  // this data will be stored within the button
  const clickHandler = () => {
    // this will remove the present data from this state back into an empty object
    setViewPage({})
    // this will return us to PagesList
    setCurrentPage(0)
  }


  useEffect(() => {
    fetchAuthor()
  }, [])
  return <>
    <h3>Title: {page.title}</h3>
    <p><b>Description:</b> {page.content}</p>
    <p><b>Author:</b> {author.name}</p>
    <button onClick={clickHandler}>Back to WikiVerse</button>
  </>
} 
	