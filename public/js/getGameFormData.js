/* eslint-disable */
const alertFunc = () => {
  alert('hey');
};
document.querySelector('.form').addEventListener('submit', (e) => {
  e.preventDefault();
  alertFunc();
});
