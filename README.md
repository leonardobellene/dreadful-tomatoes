# Dreadful Tomatoes
Dreadful Tomatoes is a platform to find new movies and TV shows.

## Demo
https://youtu.be/BcRZtT2zuhM

## Stack
React, Redux, Typescript, Jest, & Scss.

## Setup

Run the project

```bash
npm install
```

```bash
npm run start
```
Test the project

```bash
npm run test
```

## Arquitecture

```javascript
src/
├── application/	
│   └── redux   
├── assets/
├── interfaces/
├── services/
├── utilities/	
├── ui                
│   └── layout       
│         └── Home      
│         └── Header 
│         └── Shows 
│         └── Footer 
│   └── components     
│         └── Calendar 
│         └── Card 
│         └── CustomNavLink 
│         └── Poster 
│         └── SearchBar 
│         └── Selector 
```
The goal of this architecture is to separate the different sections as much as we can, and also to create components that are ready to be reused at any section.
## API integration
Data is fetched from https://static.rviewer.io/ specific endpoint. It retuns a JSON with an array of shows. This is an example of an object:
```javascript
{
 	"title": "Catch Me If You Can",
 	"description": "The true story of Frank Abagnale Jr. who, before his 19th birthday, successfully conned millions of dollars' worth of checks as a Pan Am pilot, doctor, and legal prosecutor.",
	"programType": "movies",
	"images": {
		"posterArt": {
			"url": "https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/assets/catch_me_if_you_can.jpg",
			"width": 485,
			"height": 719
		}
	},
	"releaseYear": 2002
}
```
## Redux store
It stores the fetched data to movies (if programType === "movies") or series (if programType === "series"). Then, filteredCatalog will have the filetered information depending on the search criteria (title or year).
i.e. If user is in movie section. All the catalog of movies will be dispatched to fullCatalog and when the users enters a search criteria, only the movies that apply will be dispatch to filteredMovies. After that, Selector component will display the movies.
```javascript
state: {
	movies: {
		fullCatalog: [],
		filteredCatalog: []
	},
	series: {
		fullCatalog: [],
		filteredCatalog: []
	},
}
```
## User interaction
1) User lands in Home page and selects between movies or series
2) After selection, user is redirected to Shows page and the component calls corresponding method (getMovies or getSeries) in moviesAndSeriesService.ts which makes the API request. 
3) Information is dispatched to fullCatalog(Redux).
4) If there is no search criteria (title or year) filteredCatalog(Redux) will equal fullCatalog(Redux) 
5) Selector component displays and array of Card components coming from filteredCatalog(Redux)
6) If the user adds search criteria (title or year) SearchBar component creates the corresponding array of shows and dispatches that information to filteredCatalog(Redux) and Selector components updates accordingly.

## Design
The app uses scss for styling.
All the variables are saved in utilities folder so they can be reused through different stylesheets.
```javascript
// Design
$brand-color: #C42521;
$brand-font-family: 'Roboto', sans-serif;
$brand-font-color: #676767;
$brand-white: #FFFFFF;
$brand-secondary-black: #191919;
$default-font-size: 14px; 
```
i.e. if engineer decides to change $brand-color, only by changing that file, it will be changed trough the document at every place where $brand-color is used.
```javascript
// usage example
.calendar-display {
    background-color: $brand-color;
    color: $brand-white;
    padding: 14px;
    position: relative;
}
```
The app has responsive design. It has two width breakpoints $small-screens (472px) and $medium-screens (705px).
```javascript
// Screen breakpoints
$small-screens: 472px;
$medium-screens: 705px;
```
```javascript
// usage example
.calendar-arrow {
        width: 420px;
		display: block;

        @media (min-width: $small-screens) {
            display: none;
        }
    }
```
## Author
Leonardo Bellene (leonardobellene@gmail.com)