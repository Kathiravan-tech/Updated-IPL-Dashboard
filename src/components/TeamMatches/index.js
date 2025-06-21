import Loader from 'react-loader-spinner'
import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

const backgroundColorList = {
  RCB: '#a4261d',
  KKR: '#5755a7',
  KXP: '#d91c1f',
  CSK: '#f7db00',
  RR: '#da237b',
  MI: '#13418b',
  SH: '#f26d22',
  DC: '#4f5db0',
}

class TeamMatches extends Component {
  state = {
    latestMatchDetails: [],
    recentMatches: [],
    teamBannerUrl: '',
    teamId: '',
    isLoadingInTeamMatches: true,
  }

  componentDidMount() {
    this.getTeamMatchData()
  }

  getTeamMatchData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const matchData = await response.json()
    this.setState({
      latestMatchDetails: matchData.latest_match_details,
      recentMatches: matchData.recent_matches,
      teamBannerUrl: matchData.team_banner_url,
      teamId: id,
      isLoadingInTeamMatches: false,
    })
  }

  render() {
    const {latestMatchDetails, recentMatches, teamBannerUrl} = this.state
    const {teamId, isLoadingInTeamMatches} = this.state

    const {[teamId]: teamColor} = backgroundColorList

    let bottomContainer

    if (isLoadingInTeamMatches === true) {
      bottomContainer = (
        <div testid="loader" className="loader-container">
          <Loader type="Oval" color="#13418b" height={50} width={50} />
        </div>
      )
    } else {
      bottomContainer = (
        <div
          className="team-matches-details-bg"
          style={{backgroundColor: teamColor}}
        >
          <img
            src={teamBannerUrl}
            className="team-banner-img"
            alt="team banner"
          />
          <p className="team-matches-subtitle">Latest Matches</p>
          <LatestMatch latestMatchDetails={latestMatchDetails} />
          <ul className="match-card-list-container">
            {recentMatches.map(eachMatch => (
              <MatchCard eachMatch={eachMatch} key={eachMatch.id} />
            ))}
          </ul>
        </div>
      )
    }

    return bottomContainer
  }
}

export default TeamMatches
