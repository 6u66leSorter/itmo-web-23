document.addEventListener('DOMContentLoaded', function () {
    const preloader = document.getElementById('preloader');
    const reviewsWrapper = document.querySelector('.reviews__wrapper');
    const carWrapper = document.querySelector('.car__wrapper');
    const title = document.querySelector('.reviews__title');
    const anchor = document.getElementById('reviewsList');

    const fetchData = () => {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/comments');
                const data = await response.json();
                const randomComments = getRandomComments(data, 10);
                resolve(randomComments);
            } catch (error) {
                reject(new Error('⚠ Что-то пошло не так'));
            }
        });
    };

    const getRandomComments = (data, count) => {
        const shuffledData = [...data].sort(() => Math.random() - 0.5);
        return shuffledData.slice(0, count);
    };

    const renderData = (data) => {
        preloader.style.display = 'none';
        reviewsWrapper.style.display = 'block';
        const fragment = document.createDocumentFragment();
        data.forEach((comment) => {
            const commentInfo = document.createElement('div');
            commentInfo.classList.add('comment__style');
            commentInfo.innerHTML = `<p>Имя пользователя: ${comment.name}</p><p>Email: ${comment.email}</p><p>Текст комментария: ${comment.body}</p>`;
            fragment.appendChild(commentInfo);
        });
        reviewsWrapper.appendChild(fragment);
    };

    const init = () => {
        fetchData()
            .then((data) => {
                renderData(data);
            })
            .catch((error) => {
                reviewsWrapper.innerHTML = error.message;
            });
    };

    init();
});
