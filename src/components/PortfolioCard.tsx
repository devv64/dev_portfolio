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
    <section id="portfolio" className="portfolio-section">
      <section className="bg-[#FAD4D8] py-12">
        <div className="container mx-auto">
          <div className="text-3xl text-[#001427] pt-16 font-bold pl-2">PORTFOLIO</div>
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
                <div className="relative mt-4">
                  <img src={item.imageUrl} alt={item.title} className="h-full w-full object-cover rounded-lg" />
                  <div className="absolute top-0 left-0 p-2">
                    <h3 className="text-s ml-1">{item.title}</h3>
                  </div>
                  <a href={item.link} className="absolute top-0 right-0 p-2">
                    <p className="text-white bg-[#00A6FB] rounded-lg px-2 py-0.5 text-xs">{item.tag}</p>
                  </a>
                </div>
                <a href={item.link} className="absolute inset-0 rounded-lg bg-black opacity-0 hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center p-4">
                    <h3 className="text-2xl font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-200">{item.description}</p>
                    <div
                      className="mt-4 inline-flex items-center text-white font-semibold hover:text-[#00A6FB] transition-colors duration-200"
                    >
                      View More <IoMdArrowDropright className="ml-1" />
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </Masonry>
        </div>
      </section>
    </section>
  );
};

export default PortfolioCard;
