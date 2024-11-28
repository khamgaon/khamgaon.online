// src/components/pages/Profile/ReviewCard.jsx
export const ReviewCard = ({ review }) => {
  return (
    <Card className="p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <Text variant="h4" className="mb-1">{review.businessName}</Text>
          <Text variant="body" className="text-gray-500">{review.date}</Text>
        </div>
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <StarFill
              key={i}
              className={i < review.rating ? 'text-yellow-400' : 'text-gray-200'}
              size={16}
            />
          ))}
        </div>
      </div>
      <Text variant="body">{review.comment}</Text>
    </Card>
  );
};