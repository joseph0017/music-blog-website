import React, { Component } from "react";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import Modal from "../components/modal";

export default class FashionPage extends Component {
  constructor() {
    super();

    this.state = {
      items: [],
      selectedImg: null,
    };
  }

   showModal = (items) => {
    this.setState({ selectedImg: items })
    console.log("i am clicking")
  }

  hideModal = () => {
    this.setState({ selectedImg: null })
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
                      <div key = {item.id}>
                      <div className="rounded overflow-hidden shadow-lg">
                        <img className="w-full " src={item.images} alt="Mountain" 
                        onClick = {() => this.showModal(item)}
                        />
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
                ))}
                { this.state.selectedImg && (
                  <Modal onHide = {this.hideModal} modalPicture = {this.state.selectedImg?.images} />
                )}
            </Masonry>
            </ResponsiveMasonry>
    );
  }
}

