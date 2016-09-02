// ==============================
// THEME
// ==============================

const theme = {};

// container
theme.container = {
	background: 'rgba(0, 0, 0, 0.8)',
	gutter: {
		horizontal: 10,
		vertical: 10,
	},
	zIndex: 2001,
};

// content
theme.content = {
	position: 'relative',
};

// figure
theme.figure = {
	margin: 0, // remove browser default
};

theme.image = {
	display: 'block', // removes browser default gutter
	height: 'auto',
	margin: '0 auto', // maintain center on very short screens OR very narrow image
	maxWidth: '100%',

	// disable user select
	WebkitTouchCallout: 'none',
	userSelect: 'none',
};

// header
theme.header = {
	height: 40,
};
theme.close = {
	fill: 'white',
	height: 20,
	width: 20,
};

// footer
theme.footer = {
	color: 'white',
	count: {
		color: 'rgba(255, 255, 255, 0.75)',
		fontSize: '0.85em',
	},
	height: 40,
	gutter: {
		horizontal: 0,
		vertical: 5,
	},
};

// thumbnails
theme.thumbnail = {
	activeBorderColor: 'white',
	size: 50,
	gutter: 2,
};

// arrow
theme.arrow = {
	background: 'black',
	fill: 'white',
	height: 120,
};


module.exports = theme;
