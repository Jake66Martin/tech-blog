const submitBlog = async (event) => {
    
    event.preventDefault();

    console.log('click')

    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#blog').value.trim();

    if (title && content) {

        const response = await fetch('/dashboard/newblog', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' },
          });
    }


}


    
const form = document.querySelector('.sub-btn');

form.addEventListener('submit', submitBlog);

document.querySelector('.sub-btn').addEventListener('submit', () => {
    location.reload();
  });