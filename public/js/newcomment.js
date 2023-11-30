const submitComment = async (event) => {
    
    event.preventDefault();

    console.log('click')

    const comment = document.querySelector('#comment').value.trim();
    const newData = window.location.toString().split("/")
    const blog_id = newData[4]

    

    if (comment) {

        const response = await fetch('/blog/newcomment', {
            method: 'POST',
            body: JSON.stringify({ comment, blog_id }),
            headers: { 'Content-Type': 'application/json' },
          });

          
    }


}

document
    .querySelector('.sub-btn')
    .addEventListener('submit', submitComment);