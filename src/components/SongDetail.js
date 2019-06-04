import React from 'react'
import { connect } from 'react-redux'

const SongDetail = (props) => {
    if(!props.song) {
      return ''
    }
    return(
      <div className="ui cards">
        <div className="card">
          <div className="content">
            <div className="header">Title: {props.song.title}</div>
            <div className="description">
              Duration: {props.song.duration}
            </div>
          </div>
        </div>
      </div>
    )
}

const mapStateToProps = (state) => {
  return {
    song: state.selectedSong
  }
}

export default connect(mapStateToProps)(SongDetail);
