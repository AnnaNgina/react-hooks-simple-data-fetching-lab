// create your App component here
import React, {useState,useEffect} from "react";

function App(){
    const [dogImg, setDogImg] = useState([]);
    const [wait, SetWait] = useState(false);


    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then((resp) => resp.json())
        .then((data) =>{
            console.log(data);
            setDogImg(data.message)
            SetWait(true)
        })
    }, []);
    if (!wait) return <p>Loading....</p>
    else return (
    <div>
        <img src={dogImg} alt="A Random Dog"/>
        </div>
    );
}

export default App;
