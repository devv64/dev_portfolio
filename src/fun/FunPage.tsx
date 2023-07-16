import React from 'react';
import { Link } from 'react-router-dom';

const FunPage: React.FC = () => {
  const activities = [
    {
      title: 'Activity 1',
      path: '/fun/activity1',
    },
    {
      title: 'Activity 2',
      path: '/fun/activity2',
    },
    // Add more activities here
  ];

  return (
    <div>
      <h1>Welcome to the Fun Page!</h1>
      <p>Explore the following fun activities:</p>
      <div className="activity-grid">
        {activities.map((activity) => (
          <Link key={activity.title} to={activity.path} className="activity-item">
            {activity.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FunPage;
