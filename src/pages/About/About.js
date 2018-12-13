import React from "react";
import { Link } from "react-router-dom";
import { observer, inject } from "mobx-react";
import { Upload, Icon, message } from "antd";

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJPG = file.type === "image/jpeg";
  if (!isJPG) {
    message.error("You can only upload JPG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJPG && isLt2M;
}

@inject("aboutStore")
@observer
class About extends React.Component {
  state = {
    loading: false
  };

  handleChange = info => {
    if (info.file.status === "uploading") {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false
        })
      );
    }
  };

  componentDidMount() {
    let stores = this.props.aboutStore;
    stores.aboutList();
    stores.cityList();
    //console.log(stores.ablist)
  }
  render() {
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? "loading" : "plus"} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const imageUrl = this.state.imageUrl;
    let stores = this.props.aboutStore;
    return (
      <div>
        <p>{this.props.aboutStore.title}</p>
        <Link to="/">goto Home</Link>
        <ul>
          {!!stores.ablist &&
            stores.ablist.map(rs => {
              return <li key={rs.key}>{`${rs.key} : ${rs.value}`}</li>;
            })}
        </ul>
        <br />
        <p>love city:</p>
        <ol>
          {!!stores.cylist &&
            stores.cylist.map(rs => {
              return (
                <li key={rs.id}>
                  {rs.name}
                  <Link to={`/list/${rs.name}`}>{rs.name}</Link>
                </li>
              );
            })}
        </ol>

        <Upload
          name="avatar"
          listType="picture-card"
          className="avatar-uploader"
          showUploadList={false}
          action="//jsonplaceholder.typicode.com/posts/"
          beforeUpload={beforeUpload}
          onChange={this.handleChange}
        >
          {imageUrl ? <img src={imageUrl} alt="avatar" /> : uploadButton}
        </Upload>
      </div>
    );
  }
}

export default About;