// src/components/common/DaySchedule.jsx
import React from 'react';
import TimeRangeSelect from './TimeRangeSelect';

const DaySchedule = ({ day, schedule, onChange, is24x7, onToggleClosed }) => {
    return (
        <div className="flex items-center gap-4 py-2">
            <div className="w-32 font-medium">{day}</div>
            <div className="flex items-center gap-4">
                {is24x7 ? (
                    <span className="text-green-600">Open 24/7</span>
                ) : (
                    <>
                        <label className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={schedule !== 'Closed'}
                                onChange={(e) => onToggleClosed(e.target.checked)}
                                className="rounded text-blue-600"
                            />
                            {schedule === 'Closed' ? 'Closed' : 'Open'}
                        </label>
                        {schedule !== 'Closed' && (
                            <TimeRangeSelect
                                value={schedule}
                                onChange={onChange}
                            />
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default DaySchedule;