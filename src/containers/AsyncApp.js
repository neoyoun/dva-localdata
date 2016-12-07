import React,{ Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { selectSubreddit, invalidateSubreddit, fetchPostsIfNeeded } from '../actions'
import Picker from '../components/Picker'
import Posts from '../components/Posts'

class AsyncApp extends Component {
  componentDidMount() {
    const { dispatch, selectedSubreddit } = this.props
    dispatch(fetchPostsIfNeeded(selectedSubreddit))
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedSubreddit != this.selectedSubreddit) {
      const { dispatch, selectedSubreddit } = nextProps
      dispatch(fetchPostsIfNeeded(selectedSubreddit))
    }
  }
  handleChange(nextSubreddit) {
    console.log('change to next >>'+ nextSubreddit)
    this.props.dispatch(selectSubreddit(nextSubreddit))
  }
  handleRefreshClick(e) {
    e.preventDefault()

    const { dispatch, selectedSubreddit } = this.props
    dispatch(invalidateSubreddit(selectedSubreddit))
    dispatch(fetchPostsIfNeeded(selectedSubreddit))
  }

  render() {
    const { selectedSubreddit, posts, isFetching, lastUpdated } = this.props
    return (
      <div>
        <Picker value={selectedSubreddit}
          onChange={ subreddit =>this.handleChange(subreddit)}
          options={[ 'reactjs', 'frontend', 'backend']} />
        <p>
          {lastUpdated &&
            <span>
              Last Updated at {new Date(lastUpdated).toLocaleTimeString()}.{' '}
            </span>
          }
          {!isFetching &&
            <a href="#" onClick={(e)=>this.handleRefreshClick(e)}>
              Refresh
            </a>
          }
        </p>
        {isFetching && posts.length === 0 &&
          <h2>loading...</h2>
        }
        {!isFetching && posts.length === 0 &&
          <h2>Empty</h2>
        }
        {
          posts.length > 0 &&
          <div style={{ opacity:isFetching ? 0.5 : 1 }}>
            <Posts posts={posts}/>
          </div>
        }
      </div>
      )
  }
}

AsyncApp.propTypes = {
  selectedSubreddit:PropTypes.string.isRequired,
  posts:PropTypes.array.isRequired,
  isFetching:PropTypes.bool.isRequired,
  lastUpdated:PropTypes.number,
  dispatch:PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { selectedSubreddit, postsBySubreddit } = state
  const {
    isFetching,
    lastUpdated,
    items:posts
  } = postsBySubreddit[selectedSubreddit] || { isFetching:true, items:[]}

  return {
    selectedSubreddit,
    posts,
    isFetching,
    lastUpdated
  }
}

export default connect(mapStateToProps)(AsyncApp)
