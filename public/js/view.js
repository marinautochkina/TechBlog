const viewCommentHandler = async (event) => {
    event.preventDefault();

    if (event.target.matches('.view-comments-button')) {
        const id = event.target.getAttribute('data-id');

        try {
            const response = await fetch(`/views/${id}`, {
                method: 'GET',
            });

            if (response.ok) {
               
                
            } else {
                alert('Failed to load post');
            }
        } catch (err) {
            console.error('Error fetching post:', err);
            alert('Failed to load post');
        }
    }
};

document.querySelector('.view-comments-button').addEventListener('click', viewCommentHandler);