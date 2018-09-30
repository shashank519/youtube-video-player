import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Card, Tag, Input } from "antd";
import * as Actions from "Actions/HomePageActions";
import "./HomePage.scss";

const { Meta } = Card;
const Search = Input.Search;

class HomePage extends Component {
  componentDidMount() {
    this.props.fetchVideos();
  }

  searchVideoFilter = e => {
    this.props.searchVideo(e.target.value);
  };

  render() {
    return (
      <div>
        <Row>
          <Search
            placeholder="input search text"
            onChange={this.searchVideoFilter}
            style={{ width: 200 }}
          />
        </Row>
        <Row gutter={2}>
          {this.props.fiteredVideoList &&
            this.props.fiteredVideoList.map((video, i) => {
              let tags = video.tag.split(",");
              return (
                <Col span={8} key={i}>
                  <Card
                    hoverable
                    cover={<iframe src={video.url} height={300} width={400} title={video.name}/>}
                  >
                    <Meta
                      title={video.name}
                      description={tags.map((row, index) => (
                        <Tag color="blue" key={index}>
                          {row}
                        </Tag>
                      ))}
                    />
                  </Card>
                </Col>
              );
            })}
        </Row>
      </div>
    );
  }
}

const mapStateToProps = ({ HomePageReducer }) => {
  const { videoList, isFetchingVideoList, fiteredVideoList } = HomePageReducer;
  return { videoList, isFetchingVideoList, fiteredVideoList };
};

export default connect(
  mapStateToProps,
  Actions
)(HomePage);
