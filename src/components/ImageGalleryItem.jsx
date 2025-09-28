import React from "react";
import { Modal } from "./Modal";

export class ImageGalleryItem extends React.Component {
  state = {
    showModal: false,
  };

  openModal = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { data } = this.props;
    return (
      <>
        <li onClick={this.openModal} className="ImageGalleryItem">
          <img
            src={data.previewURL}
            alt=""
            className="ImageGalleryItem-image"
          />
        </li>
        {this.state.showModal && (
          <Modal largeImageURL={data.largeImageURL} onClose={this.closeModal} />
        )}
      </>
    );
  }
}
