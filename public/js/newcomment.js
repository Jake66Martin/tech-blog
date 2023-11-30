const submitBlog = async (event) => {
    
    event.preventDefault();

    console.log('click')

    const comment = document.querySelector('#comment').value.trim();

    if (comment) {

        const response = await fetch('/blog/newcomment', {
            method: 'POST',
            body: JSON.stringify({ comment }),
            headers: { 'Content-Type': 'application/json' },
          });
    }


}

document
    .querySelector('.sub-btn')
    .addEventListener('submit', submitBlog);