import Loader from 'react-loader-spinner'
import {Component} from 'react'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamCardList: [], isLoadingInHome: true}

  componentDidMount() {
    this.getTeamCardList()
  }

  getTeamCardList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const cardData = await response.json()
    const updatedCardData = cardData.teams.map(eachCardData => ({
      name: eachCardData.name,
      id: eachCardData.id,
      teamImageUrl: eachCardData.team_image_url,
    }))
    this.setState({teamCardList: updatedCardData, isLoadingInHome: false})
  }

  render() {
    const {teamCardList, isLoadingInHome} = this.state

    let bottomDisplayContainer

    if (isLoadingInHome === true) {
      bottomDisplayContainer = (
        <div testid="loader" className="loader-container">
          <Loader type="Oval" color="#13418b" height={50} width={50} />
        </div>
      )
    } else {
      bottomDisplayContainer = (
        <div className="bg-container">
          <div className="logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              className="ipl-logo-img"
              alt="ipl logo"
            />
            <h1 className="dashboard-heading">IPL Dashboard</h1>
          </div>
          <ul className="team-card-list-container">
            {teamCardList.map(eachCard => (
              <TeamCard eachCard={eachCard} key={eachCard.id} />
            ))}
          </ul>
        </div>
      )
    }

    return bottomDisplayContainer
  }
}

export default Home
