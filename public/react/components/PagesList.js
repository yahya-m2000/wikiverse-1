import React from 'react';
import { Page } from './Page';

export const PagesList = ({pages, setCurrentPage, setViewPage}) => {
	// the data that will run when a title is clicked
	const clickHandler = (page) => {
		// changes the current page. afaik, the main page is PagesList, so I setCurrentPage(0) in App.js which represents PagesList.
		setCurrentPage(1)
		// this will make the page data visible
		setViewPage(page)

	}
	return <>
		{
			pages.map((page, idx) => {
				return <h3 key={idx} onClick={() => {
					clickHandler(page)
				}}>{page.title}</h3>
			})
		}
	</>
} 
