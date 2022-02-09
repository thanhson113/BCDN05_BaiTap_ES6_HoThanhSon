let jumText = () => {
    let text = document.querySelector('.heading').innerHTML;
    let chars = [...text];
    let content = '';

    chars.map(item => {
        content += `
            <span>${item}</span>
        `
    })
    document.querySelector('.heading').innerHTML = content;
};
jumText();






