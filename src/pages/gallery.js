import React, { Component } from "react";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import Modal from "../components/modal";
import {motion} from "framer-motion/dist/framer-motion"

export default class Gallery extends Component {
  constructor() {
    super();

    this.state = {
      items: [],
      selectedImg: null,
      isLoading: true
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
      .then((results) => this.setState({ 
        items: results.results,
        isLoading: false
       }));
  }



  render() {
  const  galleryVariant = {
      hidden: {
          opacity: 0,
      },
      visible: {
          opacity: 1,

      transition: {
        type: 'tween',
          delay: 1,
          duration: 1.4
      }
    }
  }
    return (
      this.state.isLoading ? <h2 className = "text-7xl mt-24 mb-96 ml-48"> Loading Images Just a sec...</h2> :
      <ResponsiveMasonry
      columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
      <Masonry columnsCount={3} gutter="40px">
                {this.state.items.map((item) => (
                      <div key = {item.id}>
                      <motion.div className="rounded overflow-hidden shadow-lg" 
                      variants = {galleryVariant}
                      initial = "hidden"
                      animate = "visible"
                      whileHover =  {{
                        scale: 1.1,
                        boxShadow: "0px 0px 10px rgb(100,100,100)"
                      }}

                      >
                        <img className="w-full cursor-pointer" src={item.images} alt="Mountain" 
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
                      </motion.div>
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

