import React, { useState } from 'react'
import './homepage.css'

const HomePage = ({ feed, title }) => {
  const [video, setVideo] = useState()
  const [showVideo, setShowVideo] = useState(false)
  const date = new Date()
  const isosDate = date.toISOString()
  const spiltDate = isosDate.split('T')
  const [fullDate, time] = spiltDate
  console.log(spiltDate);
  console.log(fullDate);

  //latest Matches Selection
  const allLatestMatch = feed?.filter(n => n.date.split('T')[0] === fullDate)
  console.log(allLatestMatch?.slice(0, 10));
  const latestMatches = allLatestMatch?.slice(0, 10)

  //Premier League Matches Selection
  const allPremierLeague = feed?.filter(n => n.competition.name === 'ENGLAND: Premier League')
  const premierLeague = allPremierLeague?.slice(0, 10)
  console.log(premierLeague);

  //Laliga Matches Selection
  const allLaliga = feed?.filter(n => n.competition.name === 'SPAIN: La Liga')
  const laliga = allLaliga?.slice(0, 10)
  console.log(laliga);

  //Seria A Matches Selection
  const allSeriaA = feed?.filter(n => n.competition.name === 'ITALY: Serie A')
  const seriaA = allSeriaA?.slice(0, 10)
  console.log(seriaA);

  //Ligue 1 Matches Selection
  const allLigue1 = feed?.filter(n => n.competition.name === 'FRANCE: Ligue 1')
  const ligue1 = allLigue1?.slice(0, 10)
  console.log(ligue1);

  //Bundesliga Matches Selection
  const allbundesliga = feed?.filter(n => n.competition.name === 'GERMANY: Bundesliga')
  const bundesliga = allbundesliga?.slice(0, 10)
  console.log(bundesliga);

  title = 'name'
  // console.log(title);

  // select video and display video function
  const videoHandler = (item) => {
    setVideo(item)
    setShowVideo(true)
  }

  const disableVideo = () => {
    setShowVideo(false)
  }



  return (
    <div>
      {feed ? <>
        {latestMatches && <div className="latest-matches-container">
          <h2>Latest Matches</h2>
          <div className="matches-list-container">
            {
              latestMatches?.map(match => (<div key={match.indexOf} className='match-container' onClick={() => videoHandler(match.videos[0].embed)}>
                <div className="image-container">
                  <img src={match.thumbnail} alt="thumbnail" className='thumbnail' />
                </div>
                <p className="title">{match.title}</p>
                <p className="date">{match.date}</p>
              </div>))
            }
          </div>
        </div>}
        {premierLeague && <div className="EPL-matches-container">
          <h2>Premier League Matches</h2>
          <div className="matches-list-container">
            {
              premierLeague?.map(match => (<div key={match.indexOf} className='match-container' onClick={() => videoHandler(match.videos[0].embed)}>
                <div className="image-container">
                  <img src={match.thumbnail} alt="thumbnail" className='thumbnail' />
                </div>
                <p className="title">{match.title}</p>
                <p className="date">{match.date}</p>
              </div>))
            }
          </div>
        </div>}
        {laliga && <div className="matches-container">
          <h2>LaLiga Matches</h2>
          <div className="matches-list-container">
            {
              laliga?.map(match => (<div key={match.indexOf} className='match-container' onClick={() => videoHandler(match.videos[0].embed)}>
                <div className="image-container">
                  <img src={match.thumbnail} alt="thumbnail" className='thumbnail' />
                </div>
                <p className="title">{match.title}</p>
                <p className="date">{match.date}</p>
              </div>))
            }
          </div>
        </div>}
        {seriaA && <div className="matches-container">
          <h2>Seria A Matches</h2>
          <div className="matches-list-container">
            {
              seriaA?.map(match => (<div key={match.indexOf} className='match-container' onClick={() => videoHandler(match.videos[0].embed)}>
                <div className="image-container">
                  <img src={match.thumbnail} alt="thumbnail" className='thumbnail' />
                </div>
                <p className="title">{match.title}</p>
                <p className="date">{match.date}</p>
              </div>))
            }
          </div>
        </div>}
        {ligue1 && <div className="matches-container">
          <h2>Ligue 1 Matches</h2>
          <div className="matches-list-container">
            {
              ligue1?.map(match => (<div key={match.indexOf} className='match-container' onClick={() => videoHandler(match.videos[0].embed)}>
                <div className="image-container">
                  <img src={match.thumbnail} alt="thumbnail" className='thumbnail' />
                </div>
                <p className="title">{match.title}</p>
                <p className="date">{match.date}</p>
              </div>))
            }
          </div>
        </div>}
        {bundesliga && <div className="matches-container">
          <h2>Bundesliga Matches</h2>
          <div className="matches-list-container">
            {
              bundesliga?.map(match => (<div key={match.indexOf} className='match-container' onClick={() => videoHandler(match.videos[0].embed)}>
                <div className="image-container">
                  <img src={match.thumbnail} alt="thumbnail" className='thumbnail' />
                </div>
                <p className="title">{match.title}</p>
                <p className="date">{match.date}</p>
              </div>))
            }
          </div>
        </div>}
        {showVideo && <div className="watch-match-container">
          <span onClick={disableVideo}>&#10006;</span>
          <div className="content-container">
            <div
              dangerouslySetInnerHTML={{ __html: video }}
            />
          </div>
        </div>}
      </> : <><div className="loader"></div></>}
    </div>
  )
}

export default HomePage