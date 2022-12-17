import React from 'react'


const CardText = ({cardImg, h2text, moreInfo}) => {
    return (
        <div>
            <div className="container my-24 px-6 mx-auto">
  

  <section className="mb-32 text-gray-800">
    <div className="block rounded-lg shadow-lg bg-white">
      <div className="flex flex-wrap items-center">
        <div className="lg:flex grow-0 shrink-0 basis-auto lg:w-6/12 xl:w-4/12">
          <img src= {cardImg} alt="Trendy Pants and Shoes"
            className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
        </div>
        <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
          <div className="px-6 py-12 md:px-12">
            <h2 className="text-2xl font-bold mb-4">{h2text}</h2>
            <p className="text-gray-500 mb-6">
              {moreInfo}
            </p>
            <p className="text-gray-500">
              Don't forget to visit the Gallery for inspiration and see what we have to offer
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  
</div>
        </div>
    )
}

export default CardText
