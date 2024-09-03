import React from 'react';
import { Rate, Progress } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const DetailsReview = () => {
  const reviews = [
    {
      name: 'Steven Smith',
      initials: 'SS',
      rating: 4,
      comment:
        'This course is suitable for those who are trying to learn UX Design from the beginning. As a learner, I can say without any hesitation that if anyone is in a dilemma which course he/she should enroll, then it will be the best option for them.',
      date: '1 Month Ago',
    },
    {
      name: 'Martin Hope',
      initials: 'MH',
      rating: 4,
      comment:
        'This is a very extensive and thorough course on web development taught by an excellent and passionate teacher. Angela explains difficult concepts in a simple way.',
      date: '1 Month Ago',
    },
  ];

  const ratingCounts = [0, 0, 0, 2, 0];
  const totalRatings = ratingCounts.reduce((a, b) => a + b, 0);
  const averageRating = (
    ratingCounts.reduce((a, b, i) => a + b * (i + 1), 0) / totalRatings
  ).toFixed(1);

  return (
    <div className="mx-auto p-4 border rounded mt-5">
      <h2 className="text-2xl font-bold mb-4">Student Ratings & Review</h2>
      <p className="text-sm text-gray-500 mb-4">Ratings & reviews are verified.</p>

      <div className="flex items-center mb-6">
        <div className="text-5xl font-bold mr-4">{averageRating}</div>
        <div className="flex-grow">
          <Rate disabled defaultValue={parseFloat(averageRating)} allowHalf />
          <p className="text-sm text-gray-500">Total {totalRatings} Ratings</p>
        </div>
      </div>

      {[5, 4, 3, 2, 1].map((rating) => (
        <div key={rating} className="flex items-center justify-between">
          <div className="flex gap-2 w-2/3">
            <div className="w-4 mr-2">{rating}</div>
            <Progress
              percent={(ratingCounts[rating - 1] / totalRatings) * 100}
              showInfo={false}
              strokeColor="#fadb14"
              trailColor="#f0f0f0"
            />
          </div>
          <span className="ml-2 text-sm text-gray-500">{ratingCounts[rating - 1]} Rating</span>
        </div>
      ))}

      <div className="mt-8">
        {reviews.map((review, index) => (
          <div key={index} className="mb-6 pb-6 border-b last:border-b-0">
            <div className="flex items-center mb-2">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-3">
                {review.initials}
              </div>
              <div>
                <p className="font-semibold">{review.name}</p>
                <p className="text-sm text-gray-500">{review.date}</p>
              </div>
            </div>
            <Rate disabled defaultValue={review.rating} className="mb-2" />
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailsReview;
