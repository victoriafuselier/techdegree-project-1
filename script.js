console.log('Hello Victoria. Your file is linked');

const moreButton1 = document.getElementById('more-button1');
const moreButton2 = document.getElementById('more-button2');

moreButton1.addEventListener('click', () => {
    if (moreButton1.textContent = 'More') {
        console.log('More');
        const hobby1info = document.getElementById('hobby1info');
            
        hobby1info.className = 'visible-info';
        moreButton1.textContent = 'Less';
    } else if (moreButton1.textContent = 'Less') {
        console.log('Less');

        const hobby1info = document.getElementById('hobby1info');

            hobby1info.className = 'hidden-info';
            moreButton1.textContent = 'More';
    }})

moreButton2.addEventListener('click', () => {
    if (moreButton2.textContent = 'More') {
        console.log('More');
        const hobby2info = document.getElementById('hobby2info');
            
        hobby2info.className = 'visible-info';
        moreButton2.textContent = 'Less';
    } else if (moreButton2.textContent = 'Less') {
        console.log('Less');

        const hobby2info = document.getElementById('hobby2info');

            hobby2info.className = 'hidden-info';
            moreButton2.textContent = 'More';
    }})  
