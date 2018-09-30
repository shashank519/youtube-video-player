import axios from "axios";
import homePageConstants from "Constants/HomePageConstants";

export const fetchVideos = () => {
  return dispatch => {
    dispatch({ type: homePageConstants.fetch_video_list });
    axios
      .get("http://localhost:3002/video-list")
      .then(resp => {
        dispatch({ type: homePageConstants.fetch_video_list_success, resp });
      })
      .catch(e => {
        dispatch({ type: homePageConstants.fetch_video_list_error });
      });
  };
};

export const searchVideo = searchStr => {
  return { type: homePageConstants.filterVideos, searchStr };
};
