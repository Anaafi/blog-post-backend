
const blogPost = []

const createPost = async(post) => {

    const postExist = blogPost.find((element) => element.id === post.id);
    if(postExist){
        return {
            status: 'error',
            code: 409,
            message: 'Post already exist',
            data: null
        }
    }

    blogPost.push(post);
    return {
        status: 'success',
        code: 201,
        message: 'Post added successfully',
        data: post
    }
} 

const getPost = async () => {
    return {
        status: 'success',
        code: 200,
        message: 'Post fetched successfully',
        data: blogPost
    }
}

const updatePost = async (postId, updatedPostData) => {
    const postIndex = blogPost.findIndex((element) => element.id == postId); // The problem was coming from this check
    // using === checks for equality of value and data type(what you receive from the route is a string "1" and what you ave in your array is a number 1)
    //so doing === will always return false
    // == wil check for just value equality
    //you barb? yeah
    // so meaning if i want to update another post in the postman i should add the id to it before it updates
    // Not necessarily, but it's ideal to pass it in route and also in the body
    

    if (postIndex === -1) {
        return {
            status: 'error',
            code: 404,
            message: 'Post not found',
            data: null
        };
    }

    blogPost[postIndex] = {
        ...blogPost[postIndex],
        ...updatedPostData
    };

    return {
        status: 'success',
        code: 200,
        message: 'Post updated successfully',
        data: blogPost[postIndex]
    };
};

module.exports = {
    createPost, 
    getPost,
    updatePost
}