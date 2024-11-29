// src/utils/timeFormat.js
export const to12Hour = (time24) => {
    if (time24 === '24/7') return '24/7';
    if (time24 === 'Closed') return 'Closed';

    const [hours, minutes] = time24.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const hour12 = hour % 12 || 12;
    return `${hour12}:${minutes} ${ampm}`;
};

// Update TimeRangeSelect.jsx
const TimeRangeSelect = ({ value, onChange }) => {
    const times = Array.from({ length: 48 }, (_, i) => {
        const hour = Math.floor(i / 2);
        const minute = i % 2 === 0 ? '00' : '30';
        return `${String(hour).padStart(2, '0')}:${minute}`;
    });

    const [start24, end24] = value?.split(' - ') || ['09:00', '17:00'];

    return (
        <div className="flex items-center gap-2">
            <select
                value={start24}
                onChange={(e) => onChange(`${e.target.value} - ${end24}`)}
                className="px-2 py-1 border rounded"
            >
                {times.map(time => (
                    <option key={time} value={time}>
                        {to12Hour(time)}
                    </option>
                ))}
            </select>
            <span>to</span>
            <select
                value={end24}
                onChange={(e) => onChange(`${start24} - ${e.target.value}`)}
                className="px-2 py-1 border rounded"
            >
                {times.map(time => (
                    <option key={time} value={time}>
                        {to12Hour(time)}
                    </option>
                ))}
            </select>
        </div>
    );
};
export default TimeRangeSelect;