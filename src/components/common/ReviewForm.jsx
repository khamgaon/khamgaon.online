import { useState } from "react";
import RatingInput from "./RatingInput";
import Button from "./Button";

const ReviewForm = ({ onSubmit, isSubmitting }) => {
    const [rating, setRating] = useState(5);
    const [comment, setComment] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!comment.trim()) {
            setError('Please enter a review comment');
            return;
        }

        try {
            await onSubmit({ rating, comment });
            setRating(5);
            setComment('');
        } catch (err) {
            setError('Failed to submit review. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
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

            {error && (
                <p className="text-sm text-red-500">{error}</p>
            )}

            <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full"
            >
                {isSubmitting ? 'Submitting...' : 'Submit Review'}
            </Button>
        </form>
    );
};

export default ReviewForm;