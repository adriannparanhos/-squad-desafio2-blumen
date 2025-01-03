// Add interactivity to the team cards
const teamCards = document.querySelectorAll('.team-card');

teamCards.forEach((card) => {
  card.addEventListener('click', () => {
    alert(`You clicked on ${card.querySelector('h3')?.textContent}`);
  });
});
