import React, { useState, useEffect } from 'react';
import { PagesList } from './PagesList';
import { Page } from './Page'
import { AddPage } from './AddPage';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	// stores page data
	const [pages, setPages] = useState([]);
	// redirects and stores current page data
	const [currentPage, setCurrentPage] = useState(0)
	const [viewPage, setViewPage] = useState({})

	const pageContent = [
			[
			<h2>An interesting 📚</h2>,
			<p key={2} onClick={() => setCurrentPage(2)}>Add Page</p>,
			<PagesList key={0}pages={pages} setCurrentPage={setCurrentPage} setViewPage={setViewPage} />
		],
		[
			<Page key={1} page={viewPage} setViewPage={setViewPage} setCurrentPage={setCurrentPage}/>
		],
		[
			<AddPage setCurrentPage={setCurrentPage}/>
		]
	]
	async function fetchPages(){
		try {
			const response = await fetch(`${apiURL}/wiki`);
			const pagesData = await response.json();
			setPages(pagesData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	useEffect(() => {
		fetchPages();
	}, []);

	return (
		<main>	
      <h1>WikiVerse</h1>
			{
				//
				pageContent[currentPage]
			}
		</main>
	)
}