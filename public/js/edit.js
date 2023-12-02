const updateBlog = async (event) => {
 
    event.preventDefault()

    console.log(event)
    
        const newData = window.location.toString().split("/")
        const blog_id = newData[4]
        console.log(blog_id)

        const title = document.querySelector('#title').value.trim();
        const content = document.querySelector('#blog').value.trim();
    
    if (title && content) {
        const response = await fetch(`/api/edit/${blog_id}`, {
            method: 'PUT',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' },
          });
        }
    
    
          window.location.assign("/dashboard")
    
    }
    
    const submitBtn = document.querySelector('.sub-btn')
    
    submitBtn.addEventListener('submit', updateBlog);
    