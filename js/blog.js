const nextPage = document.querySelector('#main__content__nextpage')
const prevPage = document.querySelector('#main__content__prevpage')
const firstPage = document.querySelector('#main__content__page1')
const secondPage = document.querySelector('#main__content__page2')
const thirdPage = document.querySelector('#main__content__page3')
const fourthPage = document.querySelector('#main__content__page4')
let currentPage = 0

const getBlogPosts = async() => {
    const res = await fetch('../data/blogposts.json')
    const data = await res.json()

    displayBlogPosts(data[currentPage])
    handlePrevPage()
    handleNexPage()

}

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
    container.innerHTML = ''
    blogPosts.forEach(blogPost => {
        container.appendChild(createBlogPost(blogPost.title, blogPost.description, blogPost.link, blogPost.img))
    })
}

const handlePrevPage = () => {
    if (currentPage === 0) {
        prevPage.style.display = 'none'
    } else {
        prevPage.style.display = 'block'
    }
    
}

const handleNexPage = () => {
    if (currentPage === 3) {
        nextPage.style.display = 'none'
    } else {
        nextPage.style.display = 'block'
    }
    
}

document.onload = getBlogPosts()

nextPage.addEventListener('click', () => {
    currentPage++
    getBlogPosts()
})

prevPage.addEventListener('click', () => {
    currentPage--
    getBlogPosts()
})

secondPage.addEventListener('click', () => {
    currentPage = 1
    getBlogPosts()
})

