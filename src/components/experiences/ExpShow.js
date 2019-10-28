import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'
import { IoMdWalk, IoMdTime, IoMdCalendar, IoMdCash, IoIosStar } from 'react-icons/io'


// import ReviewCard from '../reviews/ReviewCard'

class ExpShow extends React.Component {
  constructor() {
    super()

    this.state = {
      experience: null,
      experienceName: '',
      text: '',
      score: ''

    }
    this.handleDelete = this.handleDelete.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.deleteReview = this.deleteReview.bind(this)
  }

  componentDidMount() {
    this.getData()
  }

  getData() {
    const experienceId = this.props.match.params.id
    axios.get(`/api/experiences/${experienceId}`)
      .then(res => this.setState({ experience: res.data }))
      .catch(err => console.log(err))
  }

  handleChange(e) {
    this.setState({ text: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()

    const experienceId = this.props.match.params.id
    axios.post(`/api/experiences/${experienceId}/reviews`, { experienceName: this.state.experienceName }, { text: this.state.text }, { score: this.state.score }, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(res => {
        this.setState({ experience: res.data, experienceName: '', text: '', score: '' })
      })
      .catch(err => console.log(err))
  }

  deleteReview(e) {
    e.preventDefault()

    const experienceId = this.props.match.params.id
    axios.delete(`/api/experiences/${experienceId}/reviews/${e.target.value}`, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(() => this.getData())
      .catch(err => console.log(err))
  }

  handleDelete() {
    const experienceId = this.props.match.params.id
    axios.delete(`/api/experiences/${experienceId}`, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(() => {
        this.props.history.push('/experiences')
      })
      .catch(err => console.log(err))
  }

  isOwnerExperience() {
    return Auth.getPayload().sub === this.state.experience.unicorn._id
  }

  isOwnerReview() {
    return Auth.getPayload().sub === this.state.experience.traveller._id
  }

  render() {
    if (!this.state.experience) return null
    const { experience } = this.state
    return (
      <section className="container">
        <div className="columns">
          <img className="column col-12" src={experience.image} alt={experience.name}/>
          <div className="column col-6">
            <h2>{experience.name}</h2>
            <br />
            <p>{experience.description}</p>
          </div>
          <div className="column col-6">
            <h3>{`${experience.category}`}</h3>
            <h3><IoMdWalk/>{experience.intensity}</h3>
            <h3><IoMdCash/>£{experience.price}</h3>
            <h3><IoMdCalendar/>{`${experience.availability}`}</h3>
            <h3><IoMdTime/>{`${experience.time}`}</h3>
            <br />
            <button>BOOK</button>
            <br />
            <br />
            <button>BACK</button>
          </div>
          {this.isOwnerExperience() &&
        <>
          <button onClick={this.handleDelete} className="btn btn-error">DELETE THIS EXPERIENCE</button>
        </>
          }
        </div>
        <hr />
        <div className="columns">
          {this.state.experience.reviews.map(review =>
            <div key={review._id}>
              <li>{`"${review.experienceName}"`}</li>
              <li>{`"${review.text}"`}</li>
              <li><IoIosStar/>{`"${review.score}"`}</li>
              <li>{`"${review.traveller}"`}</li>
              <hr />
              {this.isOwnerReview() &&
              <button onClick={this.deleteReview} value={review._id} className="btn btn-error">DELETE THIS REVIEW</button>
              }
            </div>
          )}
          <br />
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <textarea 
                className="form-input" 
                name="experienceName" 
                id="experienceName" 
                placeholder="Experience name" 
                rows="1"
                value={this.state.experienceName}
                onChange={this.handleChange}/>
              <br />
              <textarea 
                className="form-input" 
                name="text"
                id="text" 
                placeholder="Write your review here" 
                rows="3"
                value={this.state.text}
                onChange={this.handleChange}/>
              <br />
              <label className="form-label" htmlFor="score">Review score (0-5):</label>
              <input 
                className="form-input" 
                name="score" 
                type="text" 
                id="score" 
                value={this.state.score}
                onChange={this.handleChange}/>
              <br />
              <input className="btn btn-success" type="submit" value="POST REVIEW" />
            </div>
          </form>
        </div>
      </section >
    )
  }
}

export default ExpShow