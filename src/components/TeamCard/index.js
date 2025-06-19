import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class TeamCard extends Component {
  render() {
    const {eachCard} = this.props
    const {name, teamImageUrl, id} = eachCard

    return (
      <Link to={`/team-matches/${id}`} className="card-link">
        <li className="card-item-container">
          <img src={teamImageUrl} className="team-card-image" alt={name} />
          <p className="team-card-text">{name}</p>
        </li>
      </Link>
    )
  }
}

export default TeamCard
