import React, { Component } from "react";

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
      <div class="gap-8 columns-3">
  <img class="w-full aspect-video mb-6" src="https://picsum.photos/500/300?random=1" />
  <img class="w-full aspect-square mb-6" src="https://picsum.photos/500/300?random=2" />
  <img class="w-full aspect-square mb-6" src="https://picsum.photos/500/300?random=3" />
  <img class="w-full aspect-square mb-6" src="https://picsum.photos/500/300?random=4" />
  <img class="w-full aspect-video mb-6" src="https://picsum.photos/500/300?random=5" />
  <img class="w-full aspect-video mb-6" src="https://picsum.photos/500/300?random=6" />
  <img class="w-full aspect-square mb-6" src="https://picsum.photos/500/300?random=7" />
  <img class="w-full aspect-video mb-6" src="https://picsum.photos/500/300?random=8" />
  <img class="w-full aspect-square mb-6" src="https://picsum.photos/500/300?random=9" />
</div>
    );
  }
}

const ImageContent = ({ item }) => {
  return (
    <>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 -mr-96">
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
