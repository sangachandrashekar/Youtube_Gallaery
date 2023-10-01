import React from 'react'
import './App.css';
import VideoList from './Thumbnail';
import Header from './Header'
function App() {

  let videoData = [
      {
        id: 1,
        title: "India's Places",
        thumbnailUrl: "https://i.ytimg.com/vi/IgAnj6r1O48/maxresdefault.jpg",
        likes: 120000,
        views: 2200000,
        channelName: "touropia",
        channelLogoUrl: "https://yt3.googleusercontent.com/ytc/APkrFKbSgagSx52WFSY08BECEgatN6J7o26kvdQUatIi=s900-c-k-c0x00ffffff-no-rj",
      },
      {
        id: 2,
        title: "CHICKEN OMELETTE | Huge Eggs With Chicken Meat",
        thumbnailUrl: "https://i.ytimg.com/vi/Lhn32f7ymcA/maxresdefault.jpg",
        likes: 250000,
        views: 1010000,
        channelName: "Village Cooking Channel",
        channelLogoUrl: "https://yt3.googleusercontent.com/4eEETdAR33227A9KRhQ1T4P2NyYReiZKMeaN_rZ8QZ1LSCLUudaggLhZ1C40RkDyw6SejAmW=s900-c-k-c0x00ffffff-no-rj",
      },
      {
        id: 3,
        title: "i am now supreme leader",
        thumbnailUrl: "https://cdn.tubeast.com/how_does_everyone_not_know_of_pewdiepie.jpg",
        likes: 35000,
        views: 1500000,
        channelName: "PewDiePie",
        channelLogoUrl: "https://i.pinimg.com/originals/4f/5a/4b/4f5a4bee6a664f02f19566538e8289fd.png",
      },
      {
        id: 4,
        title: "First Day at Gym | Workout for Beginners",
        thumbnailUrl: "https://i.ytimg.com/vi/CSnStrnzARI/hqdefault.jpg",
        likes: 18000,
        views: 1000000,
        channelName: "Yatinder Singh",
        channelLogoUrl: "https://yt3.googleusercontent.com/9lwjnjosZS6XTA80wxqaoKySP4UnPpK_PIBwN_h4HaHedze2e7LbZ_Xpykal3Lnipbk_Y3JXYA=s900-c-k-c0x00ffffff-no-rj",
      },
      {
        id: 5,
        title: "motorola edge 40 Neo 5G Unboxing And First Impressions",
        thumbnailUrl: "https://i.ytimg.com/vi/6ydJnMQhPXs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDTIine86x1jQtaIMSWUXKjV-qYsg",
        likes: 42000,
        views: 2300000,
        channelName: "Trakin Tech",
        channelLogoUrl: "https://yt3.googleusercontent.com/gU4o71ZnYWnTY6NxFvgWh2e7bG-kYF752ck0eANQ-uje7w9iKfFNV2oLD89wi3ZCfGHlq2xH6Lc=s900-c-k-c0x00ffffff-no-rj",
      },
      {
        id: 6,
        title: "JAWAN: Chaleya (Hindi) ",
        thumbnailUrl: "https://i.ytimg.com/vi/p2W21iY6SuI/maxresdefault.jpg",
        likes: 560000,
        views: 13000000,
        channelName: "T-Series",
        channelLogoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/T-series-logo.svg/659px-T-series-logo.svg.png",
      },
      {
        id: 7,
        title: "Other Parents Vs My Parents",
        thumbnailUrl: "https://i.ytimg.com/vi/V0SQqsk5Jzs/maxresdefault.jpg",
        likes: 320000,
        views: 4900000,
        channelName: "Harsha Benewal",
        channelLogoUrl: "https://yt3.googleusercontent.com/ytc/APkrFKZgzSi_GZ7-E1qLHGskfKSkn1s9acZO03VscjyrDg=s900-c-k-c0x00ffffff-no-rj",
      },
      {
        id: 8,
        title: "TOP 10 Fashion Tips ",
        thumbnailUrl: "https://i.ytimg.com/vi/Homuh1NYXw4/hqdefault.jpg",
        likes: 38000,
        views: 1400000,
        channelName: "Ranveer Allahbadia",
        channelLogoUrl: "https://yt3.googleusercontent.com/ytc/APkrFKaliAtWp4BY35Kdm_PuH-mNsfjKx0kNd-prXUOZoQ=s900-c-k-c0x00ffffff-no-rj",
      },
      {
        id: 9,
        title: "How to viral art videos ?",
        thumbnailUrl: "https://i.ytimg.com/vi/5UskrQdZqck/sddefault.jpg",
        likes: 29000,
        views: 1000000,
        channelName: "Aryan verma studios",
        channelLogoUrl: "https://yt3.googleusercontent.com/ytc/APkrFKY76aySjC51nsXrqWsZb90L9LEh5UfKhIr_EVsipw=s900-c-k-c0x00ffffff-no-rj",
      },
      {
        id: 10,
        title: "Develop Effective English Speaking",
        thumbnailUrl: "https://i.ytimg.com/vi/CFzit5mV-Fg/hqdefault.jpg",
        likes: 50000,
        views: 1800000,
        channelName: "IMPACT FOUNDATION",
        channelLogoUrl: "https://yt3.googleusercontent.com/ytc/APkrFKbuYPJ3Gwy57zPaXBpHjZZfsXMiIv724-fhIcvwnQ=s900-c-k-c0x00ffffff-no-rj",
      }
    ];
  return (
    <div >
     {/* <Header/> */}
     {videoData.map((video,i)=>{
      console.log(video);
      return <VideoList videoId = {video.id} videoTitle = {video.title} videothumbnailUrl = {video.thumbnailUrl} videoLikes = {video.likes} videoViews = {video.views} videoChannelname = {video.channelName} videoLogoUrl = {video.channelLogoUrl} />
     })}
    </div>
  );
}

export default App;
