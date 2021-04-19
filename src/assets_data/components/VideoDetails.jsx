import React from "react";
import likes from "../Icons/Icon-likes.svg";
import views from "../Icons/Icon-views.svg";  

const timeStampList = (props) => {
  return {
    
  }
}




function VideoDetails(props) {
  return (
    <div>
      <h2 className="video__header"> {props.videoData.title}</h2>
      <div className="video__subheader">
        <div className="video__author-date--block">
          <h2 className="video__author">By {props.videoData.channel}</h2>
          <h3 className="video__date">{props.videoData.timestamp}</h3>
        </div>
        <div className="video__views-likes--block">
          <img src={views} className="video__icon" /><h3 className="video__counter">{props.videoData.views}</h3>
          <img src={likes} className="video__icon" /><h3 className="video__counter">{props.videoData.likes}</h3>
        </div>
      </div>
      <div>      
      <h4 className="video__summery">{props.videoData.description}</h4>
      </div>
      {/* Comment Form can go here  */}
      <div className="comment">
        <h3 className="comment__header">Comments {props.videoData.comments.length}</h3>
      </div>
        <form className="comment__fill-out-form">
          <div className="comment__avatar"></div>
          <div className="comment__avatar-comment-block">
            <lable className="comment__conversation-container">
              <h4 className="comment__lables">JOIN THE CONVERSATION</h4>
              <textarea name="comment" className="comment__name-field" placeholder="Write comment here"
              rows="1" cols="200" ></textarea>
            </lable>
        <button className="comment__btn" type="submit">COMMENT</button>
    </div>
    </form>
      <ul className="comment__container">
        {props.videoData.comments.map((comment) => (
          <li className="comment__avatar-comment-list-item" key={comment.id}>
            <div className="comment__avatar-content-block">
              {/* <div className="comment__avatar-block"> */}
                <div className="comment__avatar"></div>
              {/* </div> */}
            <div className="comment__content-block">
              <div className="comment__user-date-block">
                <h3 className="comment__user-name">{comment.name}</h3>
                <h4 className="comment__date">{props.date}</h4>
              </div>
              <p className="comment__comments">{comment.comment}</p>
            </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VideoDetails;
