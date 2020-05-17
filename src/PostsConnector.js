import { connect } from 'react-redux'
import Posts from './Posts'

const mapStateToProps = state => ({
    posts: state.posts
})

export default connect(mapStateToProps, null)(Posts)
