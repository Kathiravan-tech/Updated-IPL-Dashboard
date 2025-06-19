import './index.css'

const MatchCard = props => {
  const {eachMatch} = props
  const updatedRecentMatch = {
    competingTeam: eachMatch.competing_team,
    competingTeamLogo: eachMatch.competing_team_logo,
    date: eachMatch.date,
    firstInnings: eachMatch.first_innings,
    id: eachMatch.id,
    manOfTheMatch: eachMatch.man_of_the_match,
    matchStatus: eachMatch.match_status,
    result: eachMatch.result,
    secondInnings: eachMatch.second_innings,
    umpires: eachMatch.umpires,
    venue: eachMatch.venue,
  }

  const {competingTeam, competingTeamLogo, result} = updatedRecentMatch
  const {matchStatus} = updatedRecentMatch
  const matchStausColor = matchStatus === 'Won' ? '#18ed66' : '#e31a1a'

  return (
    <li className="match-card-container">
      <img
        src={competingTeamLogo}
        className="match-card-logo"
        alt={`competing team ${competingTeam}`}
      />
      <p className="match-card-heading">{competingTeam}</p>
      <p className="match-card-result">{result}</p>
      <p className="match-card-status" style={{color: matchStausColor}}>
        {matchStatus}
      </p>
    </li>
  )
}

export default MatchCard
