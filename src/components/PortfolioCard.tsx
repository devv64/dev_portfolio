import React, { useState, useEffect, useRef } from 'react';
import { IoMdArrowDropright } from 'react-icons/io';
import Masonry from 'react-masonry-css';
import './PortfolioCard.css';

interface PortfolioItem {
  videoUrl: any;
  title: string;
  description: string;
  imageUrl: string;
  tag: string;
  link: string;
  shortdesc: string;
}

interface ExpandedCardProps {
  item: PortfolioItem;
  onClose: () => void;
}

const ExpandedCard: React.FC<ExpandedCardProps> = ({ item, onClose }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-80" onClick={onClose}>
      <div className="max-w-lg w-full p-8 bg-white rounded-lg" onClick={(event) => event.stopPropagation()}>
        <h3 className="text-2xl font-semibold text-[#00A6FB] mb-4">{item.title}</h3>
        <div className="flex justify-between mb-4">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="h-32 w-32 object-cover rounded-lg"
          />
          <div className="ml-4">
            {/* <p className="text-gray-600">
              <span className="font-semibold">Tag: </span>
              {item.tag}
            </p> */}
            <p className="text-gray-600">
              {/* <span className="font-semibold">Link: </span> */}
              <a
                href={item.link}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
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
            className="text-white hover:scale-105 bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-md transition-colors duration-300"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

interface PortfolioCardProps {
  items: PortfolioItem[];
}

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
                    className="h-[18rem] w-full object-fit rounded-lg"
                  />
                  <div className="absolute top-0 left-0 p-2">
                  <h3 className="text-lg ml-1">
                    <span className="text-stroke">{item.title}</span>
                  </h3>
                  </div>
                  <p className="absolute top-1.5 right-1.5 text-white bg-[#00A6FB] rounded-lg px-2 py-0.5 text-sm">
                    {item.tag}
                  </p>
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