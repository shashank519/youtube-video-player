import homePageConsts from "Constants/HomePageConstants";

const initialState = {
  videoList: [],
  isFetchingVideoList: false,
  error: "",
  fiteredVideoList: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case homePageConsts.fetch_video_list:
      return { isFetchingVideoList: true };
    case homePageConsts.fetch_video_list_success:
      return {
        isFetchingVideoList: false,
        videoList: action.resp.data,
        fiteredVideoList: action.resp.data
      };
    case homePageConsts.fetch_video_list_error:
      return { isFetchingVideoList: false, error: "" };
    case homePageConsts.filterVideos:
      return {
        ...state,
        fiteredVideoList: state.videoList.filter(row => {
          return row.name
            .toLowerCase()
            .includes(action.searchStr.toLowerCase());
        })
      };
    default:
      return state;
  }
};
