import React from 'react';
import { IoMdArrowDropright } from 'react-icons/io';
import Masonry from 'react-masonry-css';

interface PortfolioItem {
  title: string;
  description: string;
  imageUrl: string;
  tag: string;
  colSpan: number;
  rowSpan: number;
  link: string;
}

interface PortfolioCardProps {
  items: PortfolioItem[];
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ items }) => {
  const breakpointColumnsObj = {
    default: 4,
    1200: 3,
    992: 2,
    576: 1,
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Portfolio</h2>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {items.map((item, index) => (
            <div
              key={index}
              className={`col-span-${item.colSpan} row-span-${item.rowSpan} relative`}
            >
              <div className="relative">
                <img src={item.imageUrl} alt={item.title} className="h-full w-full object-cover rounded-lg" />
                <div className="absolute top-0 left-0 p-2">
                  <h3 className="text-xs font-semibold text-black mb-2">{item.title}</h3>
                </div>
                <a href={item.link} className="absolute top-0 right-0 p-2">
                  <p className="text-white bg-indigo-500 rounded-lg px-2 py-0.5 text-xs">{item.tag}</p>
                </a>
              </div>
              <a href={item.link} className="absolute inset-0 bg-black opacity-0 hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center p-4">
                  <h3 className="text-2xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-200">{item.description}</p>
                  <a
                    href={item.link}
                    className="mt-4 inline-flex items-center text-white font-semibold hover:text-red-500 transition-colors duration-200"
                  >
                    View More <IoMdArrowDropright className="ml-1" />
                  </a>
                </div>
              </a>
            </div>
          ))}
        </Masonry>
      </div>
    </section>
  );
};

export default PortfolioCard;
