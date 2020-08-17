import React from 'react';
import { Timeline } from 'react-twitter-widgets'
import './page-styles/news.css';


const News = () =>{
//    <a className="twitter-timeline text-center" href="https://twitter.com/earlywarningent?ref_src=twsrc%5Etfw">Tweets by earlywarningent</a> 
    return (
        <>
        <div className="center">
        <Timeline
  dataSource={{
    sourceType: 'profile',
    screenName: 'earlywarningent'
  }}
  options={{
    height: '80vh',
    width: '1000px'
  }}
/>

</div>
        </>
    )
}
export default News;