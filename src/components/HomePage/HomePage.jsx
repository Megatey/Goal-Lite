import './homepage.css'
import { useState,useEffect } from 'react'
import axios from 'axios'

const HomePage = () => {
    const [selectLeague, setSelectLeague] = useState()
    const [result, setResult] = useState()
    const [selectLeagueResult, setSelectLeagueResult] = useState([])
    const [selectVideo, setSelectVideo] = useState()
    const [loading, setLoading] = useState(false)


    const getMatch = async () => {
        const getData = await axios.get('https://www.scorebat.com/video-api/v3/')
        const output = await getData.data
        setResult(output)
    }
    useEffect( () => {
        getMatch()
        }, [])

        const getResult = () => {
           result && setSelectLeagueResult(result.response.filter(item => {
            
                console.log(result);
                return item.competition === selectLeague
            }))

        }

        const getVideo = (video) => {
            setSelectVideo(video)
            console.log(selectVideo);
            setLoading(true)
            scrollToTop();
            
        }

        useEffect(() => {
            selectVideo && setLoading(false)
        }, [selectVideo])

        const scrollToTop = () => {
            window.scrollTo({
              top: 0,
              behavior: "smooth"
            });
          };
        
    return (
        <div className="home">
            <header className='header'> <h2 className='site-name'>GoalLite</h2> <h3 className='header-text'>Watch Your Highlights Here.</h3></header>
            <div className="body">
                <div className="display-container">

                 {
                    loading && <h2 className="loading">Loading.....</h2>
                 }

                {
                    <div dangerouslySetInnerHTML={{__html: selectVideo}}></div>
                }
                </div>
                <div className="video-container">
                        <div className="select-container">
                            <div className="option-selection">
                                <select onChange={e => setSelectLeague(e.target.value)}>
                                    <option value="">Select League</option>
                                    <option value="ENGLAND: Premier League">Premier League</option>
                                    <option value="SPAIN: La Liga">La Liga</option>
                                    <option value="PORTUGAL: Liga Portugal">Liga Portugal</option>
                                    <option value="FRANCE: Ligue 1">Ligue 1</option>
                                    <option value="ITALY: Serie A">Seria A</option>
                                </select>
                                <button onClick={getResult}>Get Match</button>
                            </div>
                            <div className="results-matches">
                                {
                                   selectLeagueResult && selectLeagueResult.map( (s, index) => (
                                    <div key={index} className="info-container" onClick={() => getVideo(s.videos[0].embed)}>
                                        <div className="image-container">
                                        <img src={s.thumbnail} alt='thumbNail' className='thumb-nail'/>
                                        </div>
                                        <div className="info-details">
                                            <p className="match-title">{s.title}</p>
                                            <p className="match-date">{s.date}</p>
                                        </div>
                                    </div>
                                    ))
                                }
                            </div>
                            {/* <button onClick={scrollToTop}>Click</button> */}
                        </div>
                </div>

            </div>
            
        </div>
    )
}

export default HomePage
