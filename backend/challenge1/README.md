# Backend developer coding challenge: Node.js Challenge 1

This is a simple Node REST API created without ExpressJs and any third-party library. This REST API fetches data/movies from OMDB API.

## Prerequisites
- Install NodeJs on your machine.
- Create a free account on [http://www.omdbapi.com]()

## Get Started
- Clone this project by running `https://github.com/Khabz/travsim-coding-challenges.git`.
- Route to backend challenge 1 directory `cd backend` then `cd challenge1`.
- run `npm install` on your terminal.
- Create an account on omdbapi website [http://www.omdbapi.com]()
- Get API KEY then open project on visual studio or any IDE of your choice. Go to `routes.js` file then replace the value of const `OMBD_API_KEY` which is `YOUR_API_KEY` with your API KEY you got from OMBb Website.
- run `npm run start` to start your project.

## Endpoints
### Get movie(s) by title, type, year, page

**query parameters**
1. title : Movie title - Required
2. type : (options: movie, series, episode) - Optional
3. year : Year released - Optional
4. page : Page number - Optional

`
http://localhost:3000/api/search?title=movie_title&year=year_released&page=page_number
`

### GET movie by id

`
http://localhost:3000/api/movies?id=imdbId
`

