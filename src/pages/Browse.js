import { connect } from 'react-redux'
import { values } from 'lodash'
import React, { Component } from 'react'
import { prefetch } from 'react-fetcher'

import { fetchAllRepos } from 'actions/repos'

@prefetch(({ dispatch }) => dispatch(fetchAllRepos()))
@connect(
  state => ({
    list: values(state.repos.all),
    loading: state.loader.repos
  })
)
class Browse extends Component {

  render () {
    const { list, loading } = this.props

    return (
      <div>
        {!loading && list.map(repo => (
          <div key={repo._id}>
            {repo.name}
          </div>
        ))}
      </div>
    )
  }

}

export default Browse
