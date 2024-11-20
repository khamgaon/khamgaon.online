// src/utils/importIcon.js
import * as Icons from 'react-bootstrap-icons';

export const importIcon = (iconName) => {
  const IconComponent = Icons[iconName];
  if (IconComponent) {
    return IconComponent;
  }
  // Fallback to a default icon if the specified icon is not found
  return Icons.QuestionCircle; // Use any default icon you prefer
};