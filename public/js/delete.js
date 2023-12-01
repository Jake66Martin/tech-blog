const deleteBlog = async () => {


    const response = await fetch(`/edit/${id}`, {
        method: 'DELETE',
      });

      console.log(response)

}

const form = document.querySelector('.delete')

form.addEventListener('click', deleteBlog);

document.querySelector('.delete').addEventListener('click', () => {
    location.reload();
  });