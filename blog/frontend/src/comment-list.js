import React from 'react'

const CommentList = ({ comments }) => {

    const handleCommentStatus = ({ status, content }) => {
        if (status === 'approved') {
            return content
        }
        if (status === 'pending') {
            return 'This comment is awaiting moderation.'
        }
        if (status === 'rejected') {
            return 'This comment has been rejected'
        }
    } 

    const renderedComments = comments.map(comment => {
        return <li key={comment.id}>{handleCommentStatus(comment)}</li>
    })

    return <ul>{renderedComments}</ul>
}

export default CommentList
