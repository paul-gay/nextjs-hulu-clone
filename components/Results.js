// import requests from "../utils/requests"
import Thumbnail from "./Thumbnail"
// import FlipMove from "react-flip-move"

const Results = ({ results }) => {
    return (
        <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-start">
            {results.map((result) => (
                <Thumbnail key={result.id} result={result} />
            ))}
        </div>
    )
}

export default Results
