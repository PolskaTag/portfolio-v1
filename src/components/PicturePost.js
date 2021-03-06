/** PicturePost will be a component where I can showcase off some awesome photos
 * that I've taken over the years. Picture Posts will populate on the right side
 * of the Blog.js component.
 */

import "./PicturePost.css";

export default function PicturePost(props) {
  return (
    <div className="picture-post">
      {props.post.img}
      <div className="picture-title-container">
        <h3>{props.post.title}</h3>
        <div className="picture-title-empty"></div>
      </div>
    </div>
  );
}
