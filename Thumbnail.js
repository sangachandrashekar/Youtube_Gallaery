function VideoList(props){
    return (
      <div className="video-list">
          <div key={props.videoId} className="video-card">
            <img src={props.videothumbnailUrl} alt={props.videoTitle} className="video-thumbnail" />
            <h4 className="video-title">{props.videoTitle}</h4>
            <div className="logo" ><div><img src={props.videoLogoUrl} alt={props.videoChannelname} className="channel-logo"  /></div>
            <div className="channel-name">{props.videoChannelname}</div></div>
            <div className="video-stats">
              <p className="likes"><img className="like" src="https://cdn-icons-png.flaticon.com/512/2107/2107956.png"/> {props.videoLikes} Likes</p>
              <p className="views"><img className="like" src="https://cdn-icons-png.flaticon.com/512/709/709612.png"/>{props.videoViews} Views</p>
            </div>
          </div>
        
      </div>
    );
  };
  
  export default VideoList;