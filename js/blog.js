const getContent = () => {
    fetch('../data/blogposts.json').then(async response => {
        try {
         const data = await response.json()
       } catch(error) {
         console.log('Error happened here!')
         console.error(error)
       }
      })
}

const test = require('../data/blogposts.json')
console.log(test)

const createBlogPost = (title, description, link, img) => {
    const blogPost = document.createElement('div')
    blogPost.classList.add('main__content__grid__item')
    blogPost.style.backgroundImage = `url(${img})`

    const blogPostTitle = document.createElement('a')
    blogPostTitle.textContent = title
    blogPostTitle.href = link
    blogPostTitle.classList.add('main__content__grid__item__title')

    const blogPostDesc = document.createElement('p')
    blogPostDesc.textContent = description

    const readMore = document.createElement('a')
    readMore.textContent = 'Read More'
    readMore.href = link

    blogPost.appendChild(blogPostTitle)
    blogPost.appendChild(blogPostDesc)
    blogPost.appendChild(readMore)

    return blogPost
}

const displayBlogPosts = (blogPosts) => {
    const container = document.querySelector('.main__content__grid')
    blogPosts.forEach(blogPost => {
        container.appendChild(createBlogPost(blogPost.title, blogPost.description, blogPost.link, blogPost.img))
    })
}