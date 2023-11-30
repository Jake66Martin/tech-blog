const submitComment = async (event) => {
    
    event.preventDefault();

    console.log('click')

    const comment = document.querySelector('#comment').value.trim();

    console.log(comment)

    if (comment) {

        const response = await fetch('/blog/newcomment', {
            method: 'POST',
            body: JSON.stringify({ comment }),
            headers: { 'Content-Type': 'application/json' },
          });

          console.log(response)
    }


}

document
    .querySelector('.sub-btn')
    .addEventListener('submit', submitComment);