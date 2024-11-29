import { useState } from "react";
import RatingInput from "./RatingInput";
import Button from "./Button";

const ReviewForm = ({ onSubmit }) => {
    const [rating, setRating] = useState(5);
    const [comment, setComment] = useState('');

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                onSubmit({ rating, comment });
                setRating(5);
                setComment('');
            }}
            className="space-y-4"
        >
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Rating
                </label>
                <RatingInput value={rating} onChange={setRating} />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Review
                </label>
                <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required
                    placeholder="Share your experience..."
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    rows={4}
                />
            </div>

            <Button type="submit" variant="primary">
                Submit Review
            </Button>
        </form>
    );
};

export default ReviewForm;