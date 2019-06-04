import React from 'react'
import { connect } from 'react-redux'
import { selectSong } from '../actions' 

class SongList extends React.Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <div className="ui button" onClick={() => this.onButtonClick(song)}>
              See Details
            </div>
          </div>
          <div className="content">
            {song.title}
          </div>
        </div>
      )
    })
  }

  onButtonClick(song) {
    this.props.selectSong(song)
  }

  render() {
    return(
      <div className="ui middle aligned divided list">
        {this.renderList()}
      </div>
    )
  }
}

// We take the state in the store, and make it become
// props for this component so we can access it
const mapStateToProps = (state) => {
  return {
    songs: state.songs
  }
}

const mapDispatchToProps = {
    selectSong: selectSong
}

// you have to wire up the global state and actions into this component
// this way when they are called they actually take a global affect
export default connect(mapStateToProps, mapDispatchToProps)(SongList);
