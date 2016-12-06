import React,{ Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { selectSubreddit, invalidateSubreddit, fetchPostsIfNeeded } from '../actions'
import Picker from '../components/Picker'
import Posts from '../components/Posts'

class AsyncApp extends Component {
  constructor(props){
    super(props)
    //this.handleChange = this.handleChange.bind(this)
   // this.handleRefreshClick = this.handleRefreshClick.bind(this)
  }
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
    this.props.dispatch(selectSubreddit(nextSubreddit))
  }
  handleRefreshClick(e) {
    e.preventDefault()

    const { dispatch, selectedSubreddit } = this.props
    dispacth(invalidateSubreddit(selectedSubreddit))
    dispatch(fetchPostsIfNeeded(selectedSubreddit))
  }

  render() {
    const { selectedSubreddit, posts, isFetching, lastUpdated } = this.props
    return (
      <div>
        <Picker value={selectedSubreddit}
          onChange={()=>this.handleChange}
          options={[ 'reactjs', 'frontend']} />
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
            <Post posts={posts}/>
          </div>
        }
      </div>
      )
  }
}

AsyncApp.propTypes = {
  selectedSubreddit:PropTypes.string.isRequired,
  posts:PropsTypes.array.isRequired,
  isFetching:PropsTypes.bool.isRequired,
  lastUpdated:PropsTypes.number,
  dispatch:PropsTypes.func.isRequired
}
