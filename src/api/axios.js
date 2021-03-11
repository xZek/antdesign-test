import React,{useState, useEffect} from 'react';
import axios from 'axios';

const Axios = () => {

    const [photos,setPhotos] = useState([]);


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos',{
            params: {
                _limit: 10
               }
        })
        .then(res=>{const photos = res.data;
            setPhotos(photos);
        
        });
    }, []);

    return (
        <div>
            <ul>
           {photos.map(photo => (
               <li key={photo.key}>{photo.title},{photo.url},{" "}
               <img src={photo.url} alt={photo.title} height={100} />
               </li>
           ))}
            </ul>
        </div>

    );
};

export default Axios;