// Changes the accent color of the website based on the day of the week
const accentColors = [
  { hex: '#E8C9A0', rgb: '232, 201, 160' }, // Sunday - salmon-pink
  { hex: '#9BC49A', rgb: '155, 196, 154'}, // Monday - sage green
  { hex: '#BE73EA', rgb: '190, 115, 234'}, // Tuesday - dusty-teal
  { hex: '#FF7474', rgb: '255, 116, 116' }, // Wednesday - tan
  { hex: '#6BC4B8', rgb: '107, 196, 184' }, // Thursday - purple
  { hex: '#F08A4B', rgb: '240, 138, 75' }, // Friday - 
  { hex: '#87C9FF', rgb: '135, 201, 255' }  // Saturday - 
];

const today = new Date().getDay();
const root = document.body.style;
root.setProperty('--accent-color', accentColors[today].hex);
root.setProperty('--accent-color-rgb', accentColors[today].rgb);