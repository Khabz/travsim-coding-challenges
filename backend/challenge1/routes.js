const http = require("http");
const url = require("url");
const params = require("./utils");

const OMBD_API_KEY = "a78ee992";
const BASE_URL = "http://www.omdbapi.com/"


module.exports = http.createServer(async(req, res) => {
    const reqUrl = url.parse(req.url, true);
    /**
     * @route api/search?title=movie_title&year=year_released&page=page_number
     * @description Search movie(s) by title, type(options: movie, series, episode)/year
     * @param { name, year, page }
     */
    if (reqUrl.pathname == "/api/movies/search" && req.method === "GET") {
        try {
            req.params = params(req);
            const { title, year, page } = req.params;
            const SEARCH_URL = `${BASE_URL}?s=${title}&y=${year}&page=${page}&apikey=${OMBD_API_KEY}`;

            await http.get(SEARCH_URL, (response) => {
                let results = "";

                response.on("data", (chunk) => {
                    results += chunk;
                });
                response.on("end", () => {
                    res.statusCode = 200;
                    res.setHeader("content-Type", "Application/json");
                    res.end(results);
                });
            });
        } catch (error) {
            res.statusCode = 500;
            res.setHeader("content-Type", "Application/json");
            res.end(error.message)
        }
    }

    /**
     * @route api/movies?id=imdbId
     * @description Get movie by it's Id/IMDb id 
     * @param { id }
     */
    else if (reqUrl.pathname == "/api/movies" && req.method === "GET") {
        try {
            req.params = params(req);
            const { id } = req.params;
            const SEARCH_URL = `${BASE_URL}?i=${id}&apikey=${OMBD_API_KEY}`;

            await http.get(SEARCH_URL, (response) => {
                let results = "";

                response.on("data", (chunk) => {
                    results += chunk;
                });
                response.on("end", () => {
                    res.statusCode = 200;
                    res.setHeader("content-Type", "Application/json");
                    res.end(results);
                });
            });
        } catch (error) {
            res.statusCode = 500;
            res.setHeader("content-Type", "Application/json");
            res.end(error.message)
        }
    }
    // Invalid endpoint 
    else {
        const error = "Oops! Endpoint not available";
        res.statusCode = 500;
        res.setHeader("content-Type", "Application/json");
        res.end(error)
    }
});