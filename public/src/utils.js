// eslint-disable-next-line
export const formatDate = (date) => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}T${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
export const formatDateForDisplay = (date) => (
  typeof date === 'string' ? date.replace('T', ' ') : formatDate(date).replace('T', ' '));
export default formatDate;
