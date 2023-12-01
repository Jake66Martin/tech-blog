const deleteBlog = async (event) => {
 
event.preventDefault()

    const newData = window.location.toString().split("/")
    const blog_id = newData[4]
    console.log(blog_id)


    const response = await fetch(`/edit/${blog_id}`, {
        method: 'DELETE',
      });

      console.log(response)

      window.location.assign("/dashboard")

}

const form = document.querySelector('.delete')

form.addEventListener('click', deleteBlog);

