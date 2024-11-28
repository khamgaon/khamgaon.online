import { PencilSquare } from 'react-bootstrap-icons';

// src/components/pages/Profile/ProfileHeader.jsx
export const ProfileHeader = ({ user }) => {
  return (
    <div className="relative h-80">
      <div className="absolute inset-0">
        <img
          src={user.coverPhoto}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
      
      <div className="absolute bottom-8 left-8 flex items-end gap-6">
        <div className="relative">
          <img
            src={user.profilePicture}
            alt={user.name}
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
          />
          <button className="absolute bottom-0 right-0 bg-blue-600 rounded-full p-2 text-white hover:bg-blue-700 transition-colors">
            <PencilSquare size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};