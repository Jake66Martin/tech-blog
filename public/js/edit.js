const updateBlog = async (event) => {
 
    event.preventDefault()

    console.log(event)
    
        const newData = window.location.toString().split("/")
        const blog_id = newData[4]
        console.log(blog_id)
    
    
        const response = await fetch(`/edit/${blog_id}`, {
            method: 'PUT',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' },
          });
    
          console.log(response)
    
          window.location.assign("/dashboard")
    
    }
    
    const form = document.querySelector('.sub-btn')
    
    form.addEventListener('submit', updateBlog);
    