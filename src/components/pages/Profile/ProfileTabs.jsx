// src/components/pages/Profile/ProfileTabs.jsx
export const ProfileTabs = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'about', label: 'About' },
    { id: 'favorites', label: 'Favorites' },
    { id: 'reviews', label: 'Reviews' }
  ];

  return (
    <div className="flex gap-8 border-b border-gray-200">
      {tabs.map(tab => (
        <button
          key={tab.id}
          className={`px-4 py-3 font-medium text-sm transition-colors relative
            ${activeTab === tab.id ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.label}
          {activeTab === tab.id && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
          )}
        </button>
      ))}
    </div>
  );
};