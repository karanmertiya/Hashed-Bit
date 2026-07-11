function toggleVisibility() {
    const p = document.getElementById('useless-paragraph');
    if (p.style.display === 'none') {
        p.style.display = 'block';
    } else {
        p.style.display = 'none';
    }
}