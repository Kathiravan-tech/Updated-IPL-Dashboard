import Loader from 'react-loader-spinner'
import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'
import {Link} from 'react-router-dom'
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

  getPieChartData = recentMatches => {
    const result = {won: 0, lost: 0, drawn: 0}
    recentMatches.forEach(match => {
      const status = match.match_status
      if (status === 'Won') result.won += 1
      else if (status === 'Lost') result.lost += 1
      else if (status === 'Drawn') result.drawn += 1
    })
    return [
      {name: 'won', value: result.won},
      {name: 'lost', value: result.lost},
      {name: 'drawn', value: result.drawn},
    ]
  }

  render() {
    const {latestMatchDetails, recentMatches, teamBannerUrl} = this.state
    const {teamId, isLoadingInTeamMatches} = this.state

    const {[teamId]: teamColor} = backgroundColorList

    const pieChartData = this.getPieChartData(recentMatches)
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
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                cx="50%"
                cy="50%"
                data={pieChartData}
                startAngle={0}
                endAngle={360}
                innerRadius="40%"
                outerRadius="70%"
                dataKey="value"
                nameKey="name"
              >
                <Cell key="won" fill="#fecba6" />
                <Cell key="lost" fill="#b3d23f" />
                <Cell key="drawn" fill="#a44c9e" />
              </Pie>
              <Legend
                iconType="circle"
                layout="horizontal"
                verticalAlign="bottom"
                align="center"
              />
            </PieChart>
          </ResponsiveContainer>
          <Link to="/" className="link-style">
            <button className="back-button" type="button">
              Back
            </button>
          </Link>
        </div>
      )
    }

    return bottomContainer
  }
}

export default TeamMatches
