import React, { useEffect, useState } from 'react'
import LASTFM_API_KEY from './config';
import axios from 'axios';


interface PlayHistoryObject {
    artist: {
      mbid: string;
      '#text': string;
    };
    name: string;
    image: string;
  }

  declare global {
    interface Window {
      IN: any;
    }
  }

function Fun() {
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
      
  return (
    <div>
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
  )
}

export default Fun