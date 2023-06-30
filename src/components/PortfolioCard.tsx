import React, { useState } from 'react';
import { IoMdArrowDropright } from 'react-icons/io';
import Masonry from 'react-masonry-css';

interface PortfolioItem {
  videoUrl: any;
  title: string;
  description: string;
  imageUrl: string;
  tag: string;
  link: string;
  shortdesc: string;
}

interface PortfolioCardProps {
  items: PortfolioItem[];
}

interface ExpandedCardProps {
  item: PortfolioItem;
  onClose: () => void;
}


const ExpandedCard: React.FC<ExpandedCardProps> = ({ item, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-80">
      <div className="max-w-lg w-full p-8 bg-white rounded-lg">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">{item.title}</h3>
        <div className="flex justify-between mb-4">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="h-32 w-32 object-cover rounded-lg"
          />
          <div className="ml-4">
            <p className="text-gray-600">
              <span className="font-semibold">Tag: </span>
              {item.tag}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Link: </span>
              <a href={item.link} className="text-blue-500 hover:underline">
                {item.link}
              </a>
            </p>
          </div>
        </div>
        <p className="text-gray-600">{item.description}</p>
        {item.videoUrl !== '' && (
          <div className="mt-4">
            <video controls className="w-full">
              <source src={item.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
        <div className="flex justify-end mt-6">
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};



const PortfolioCard: React.FC<PortfolioCardProps> = ({ items }) => {
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null);

  const breakpointColumnsObj = {
    default: 4,
    1200: 3,
    992: 2,
    576: 1,
  };

  return (
    <section id="portfolio" className="portfolio-section">
      <section className="bg-[#001427] py-12">
        <div className="container mx-auto">
          <div className="text-3xl text-[#DBDFAC] pt-16 font-bold pl-2">PORTFOLIO</div>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {items.map((item, index) => (
              <div
                key={index}
                onClick={() => setSelectedCardIndex(index)}
              >
                <div className="relative mt-4">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="h-[18rem] w-full object-cover rounded-lg"
                  />
                  <div className="absolute top-0 left-0 p-2">
                    <h3 className="text-sm ml-1">{item.title}</h3>
                  </div>
                  <a href={item.link} className="absolute top-1.5 right-1.5">
                    <p className="text-white bg-[#00A6FB] rounded-lg px-2 py-0.5 text-xs">
                      {item.tag}
                    </p>
                  </a>
                  <a
                    className="absolute inset-0 flex items-center justify-center bg-black opacity-0 hover:opacity-80 transition-opacity duration-300 rounded-lg"
                  >
                    <div className="text-center p-4">
                      <h3 className="text-2xl font-semibold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-200">{item.shortdesc}</p>
                      <div className="mt-4 inline-flex items-center text-white font-semibold hover:text-[#00A6FB] transition-colors duration-200">
                        View More <IoMdArrowDropright className="ml-1" />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </Masonry>
        </div>
      </section>
      {selectedCardIndex !== null && (
        <ExpandedCard
          item={items[selectedCardIndex]}
          onClose={() => setSelectedCardIndex(null)}
        />
      )}
    </section>
  );
};

export default PortfolioCard;