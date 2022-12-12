import React, { Component } from "react";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

export default class FashionPage extends Component {
  constructor() {
    super();

    this.state = {
      items: [],
    };
  }

  async componentDidMount() {
    this.getImages();
  }
  getImages() {
    fetch("http://127.0.0.1:8000/api/images/")
      .then((results) => results.json())
      .then((results) => this.setState({ items: results.results }));
  }

  render() {
    return (
      <ResponsiveMasonry
      columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
      <Masonry columnsCount={3} gutter="10px">
                {this.state.items.map((item) => (
                    <ImageContent item = {item} key = {item.id} />
                ))}
            </Masonry>
            </ResponsiveMasonry>
    );
  }
}

const ImageContent = ({ item }) => {
  return (
    <>
      <div>
        <div className="rounded overflow-hidden shadow-lg">
          <img className="w-full " src={item.images} alt="Mountain" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Mountain</div>
            <p className="text-gray-700 text-base">{item.text}</p>
          </div>
          <div className="px-6 pt-4 pb-2 ">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {item.title}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {item.title}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {item.title}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
