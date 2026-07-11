const textContainer = document.getElementById('text-container');
const colorbox = document.getElementById('colorbox');
const colorchange = document.getElementById('colorchange');
const fontsize = document.getElementById('fontsize');
const italicBtn = document.getElementById('italic');
const underlineBtn = document.getElementById('underline');
const boldBtn = document.getElementById('bold');
const list = document.getElementById('list');
const getstyleBtn = document.getElementById('getstyle');
const cssProps = document.getElementById('css-props');

if (colorchange) {
    colorchange.addEventListener('click', () => {
        textContainer.style.color = colorbox.value;
    });
}

if (fontsize) {
    fontsize.addEventListener('input', () => {
        textContainer.style.fontSize = fontsize.value + 'px';
    });
}

if (italicBtn) {
    italicBtn.addEventListener('click', () => {
        if (textContainer.style.fontStyle === 'italic') {
            textContainer.style.fontStyle = 'normal';
        } else {
            textContainer.style.fontStyle = 'italic';
        }
    });
}

if (underlineBtn) {
    underlineBtn.addEventListener('click', () => {
        if (textContainer.style.textDecoration === 'underline') {
            textContainer.style.textDecoration = 'none';
        } else {
            textContainer.style.textDecoration = 'underline';
        }
    });
}

if (boldBtn) {
    boldBtn.addEventListener('click', () => {
        if (textContainer.style.fontWeight === 'bold') {
            textContainer.style.fontWeight = 'normal';
        } else {
            textContainer.style.fontWeight = 'bold';
        }
    });
}

if (list) {
    list.addEventListener('change', () => {
        textContainer.style.fontFamily = list.value;
    });
}

if (getstyleBtn) {
    getstyleBtn.addEventListener('click', () => {
        let color = textContainer.style.color || 'black';
        let fontSize = textContainer.style.fontSize || '55px';
        let fontFamily = textContainer.style.fontFamily || 'sans-serif';
        let textDecoration = textContainer.style.textDecoration || 'none';
        let fontStyle = textContainer.style.fontStyle || 'normal';
        let fontWeight = textContainer.style.fontWeight || 'normal';
        
        cssProps.textContent = `color: ${color}; font-size: ${fontSize}; font-family: ${fontFamily}; text-decoration: ${textDecoration}; font-style: ${fontStyle}; font-weight: ${fontWeight};`;
    });
}