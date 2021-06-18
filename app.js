const board = document.querySelector('#board'),
	  colors = ['#1240AB', '#2A4480', '#06266F', '#4671D5', '#6C8CD5', '#FFAA00', '#BF8F30', '#A66F00', '#FFBF40', '#FFD073'],
	  SQUARES_NUMBER = 500;

const setColor = event => {
	const element = event.target;
	const color = getRandomColor();
	element.style.backgroundColor = color;
	element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

const removeColor = event => {
	const element = event.target;
	element.style.backgroundColor = '#1d1d1d'
	element.style.boxShadow = `0 0 2px #000`
};

const getRandomColor = () => {
	return colors[Math.floor(Math.random() * colors.length)]
};

for (let i = 0; i < SQUARES_NUMBER; i++) {
	const square = document.createElement('div');
	square.classList.add('square');

	square.addEventListener('mouseover', setColor);

	square.addEventListener('mouseleave', removeColor);
	
	board.append(square);
};

