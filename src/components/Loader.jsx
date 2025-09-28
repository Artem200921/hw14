import React from "react";
import { ThreeDots } from "react-loader-spinner";
import { ImageGallery } from "./ImageGallery";

export class Loader extends React.Component {
  render() {
    const { api } = this.props;
    const isLoading = !api || api.length === 0;
    return (
      <>
        {isLoading ? (
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="loading"
            wrapperClass="dots"
          />
        ) : (
          <ImageGallery api={api} loadMore={this.props.loadMore} />
        )}
      </>
    );
  }
}
