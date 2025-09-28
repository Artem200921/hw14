import React from "react";
import { ImageGalleryItem } from "./ImageGalleryItem";
import { Button } from "./Button";

export class ImageGallery extends React.Component {
  render() {
    const { api } = this.props;
    console.log(api);
    const isLoading = !api || api.length === 0;
    // Remove items with duplicate ids
    const uniqueApi = api.filter(
      (item, index, arr) => arr.findIndex((el) => el.id === item.id) === index
    );
    return (
      <ul className="ImageGallery">
        {uniqueApi.map((e) => {
          return <ImageGalleryItem data={e} key={e.id} />;
        })}
        {isLoading ? null : <Button loadMore={this.props.loadMore} />}
      </ul>
    );
  }
}
