import React, { useEffect, useState } from 'react'
import './Search.css'
import { Link, useParams } from 'react-router-dom'
import { API_KEY, value_converter } from '../../data'
import moment from 'moment'

const Search = () => {

    const [getVideo, setgetVideo] = useState(null)
    const { id } = useParams()

    const getSearchData = async () => {
        try {
            const res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${id}&key=${API_KEY}`)
            const data = await res.json()
            setgetVideo(data.items);
        } catch (e) {
              console.log(e);
        }
    }

    useEffect(() => {
        getSearchData()
    }, [id])


    if (getVideo === null) {
        return <h1>Loading...</h1>
    }



    return (
        <div className='feed Searchfeed'>
            {
                getVideo.map((video, i) => {
                    return <Link key={i} to={`/playvideo/${video.id.videoId}`} className="card">
                        <img src={video.snippet.thumbnails.medium.url} alt="" />
                        <h2>{video.snippet.title}</h2>
                        <h3>{video.snippet.channelTitle}</h3>
                        <p>{moment(video.snippet.publishedAt).fromNow()}</p>
                    </Link>
                })
            }
        </div>
    )
}

export default Search