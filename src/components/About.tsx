import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import axios from 'axios';
import './About.css';
import LASTFM_API_KEY from './config';

declare global {
  interface Window {
    IN: any;
  }
}

interface AboutProps {
  imageSrc: string;
  title: string;
  description: string;
}

interface PlayHistoryObject {
  artist: {
    mbid: string;
    '#text': string;
  };
  name: string;
  image: string;
}

const About: React.FC<AboutProps> = ({ imageSrc, title, description }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const [recentlyPlayed, setRecentlyPlayed] = useState<PlayHistoryObject[]>([]);

  const fetchRecentlyPlayed = async () => {
    try {
      const response = await axios.get(
        `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=devv64&api_key=${LASTFM_API_KEY}&format=json&limit=5`
      );
      const tracks: PlayHistoryObject[] = response.data.recenttracks.track;
      const updatedTracks: PlayHistoryObject[] = [];

      for (const track of tracks) {
        const trackInfoResponse = await axios.get(
          `https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${LASTFM_API_KEY}&artist=${encodeURIComponent(
            track.artist['#text']
          )}&track=${encodeURIComponent(track.name)}&format=json`
        );
        const trackInfo = trackInfoResponse.data.track;

        const updatedTrack: PlayHistoryObject = {
          ...track,
          image: trackInfo.album?.image?.[3]['#text'] || '',
        };

        updatedTracks.push(updatedTrack);
      }

      setRecentlyPlayed(updatedTracks);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRecentlyPlayed();
  }, []);

  const fadeAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  useEffect(() => {
    const loadLinkedInSDK = () => {
      const script = document.createElement('script');
      script.src = 'https://platform.linkedin.com/badges/js/profile.js';
      script.async = true;
      script.defer = true;
      script.onload = () => {
        if (window.IN) {
          window.IN.init();
          window.IN.parse();
        }
      };
      document.head.appendChild(script);
    };

    loadLinkedInSDK();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#001427] overflow-x-hidden pt-36">
      <div ref={ref} className="flex items-center bg-[#81d5ff] rounded-lg p-6">
        <div className="relative w-1/3 flex justify-center">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mix-blend-multiply"></div>
          <div className="rounded-full w-40 h-40 relative overflow-hidden">
            <motion.img
              src={imageSrc}
              alt="About"
              className="rounded-full w-full h-full object-cover border-8 border-white shadow-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={fadeAnimation}
              transition={{ duration: 1.2 }}
            />
          </div>
        </div>
        <div className="w-1/2 ml-6">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 leading-tight whitespace-normal">
            {title}
          </h2>
          <p className="text-gray-600 leading-relaxed whitespace-normal">
            {description}
          </p>
          <div className="mt-8">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
              <div className="w-8 h-8 bg-pink-500 rounded-full mx-2"></div>
              <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
            </div>
            <div className="mt-4">
              <div className="bg-gray-300 w-64 h-4 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      {/* Additional section */}
      <div className="flex justify-center mt-8">
        {/* Display the recently played tracks */}
        <div className="w-full max-w-screen-xl mx-auto p-4 bg-white rounded-lg shadow-lg overflow-x-auto">
          <h3 className="text-lg font-bold mb-4">Recently Played Tracks</h3>
          <div className="tracks-container">
            {recentlyPlayed.map((track, index) => (
              <div key={index} className="track">
                <div className="track-info">
                  <div className="track-name">
                    <strong className="whitespace-nowrap overflow-hidden overflow-ellipsis">{track.name}</strong>
                  </div>
                  <div>
                    <img src={track.image} alt="No Album Cover :(" className="track-image" />
                  </div>
                  <div className="mt-2">
                    <span className="text-sm text-gray-600">{track.artist['#text']}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Social Badges */}
      <div className="linkedin-badge-container mt-8">
        <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="light" data-type="VERTICAL" data-vanity="dev-patel-323017221" data-version="v1"></div>
      </div>
      <div className="github-badge-container mt-8">
        <a href="https://github.com/devv64" target="_blank" rel="noopener noreferrer">
          {/* https://github.com/Ashutosh00710/github-readme-activity-graph look here to choose theme later */}
          <img src="https://github-readme-activity-graph.vercel.app/graph?username=devv64&theme=github" alt="GitHub Activity Graph" />
        </a>
      </div>
    </div>
  );
};

export default About;
