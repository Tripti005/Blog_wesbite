import { useEffect, useState } from "react";
function Home(){
//let title = "This is my title";
const [title,setTitle] = useState("welcome");


useEffect(() =>{fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(json => {
    setTitle(`Title: ${json.title},Completed:${json.completed} `);

}
)},[]);


    return(
        <div className="blog-list">
            <h2>Blog</h2>
            <h2>{title}</h2>
            
        </div>
    )
}
export default Home;