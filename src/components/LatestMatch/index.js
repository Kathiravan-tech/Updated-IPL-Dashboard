import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const updatedMatchDetails = {
    competingTeam: latestMatchDetails.competing_team,
    competingTeamLogo: latestMatchDetails.competing_team_logo,
    date: latestMatchDetails.date,
    firstInnings: latestMatchDetails.first_innings,
    id: latestMatchDetails.id,
    manOfTheMatch: latestMatchDetails.man_of_the_match,
    matchStatus: latestMatchDetails.match_status,
    result: latestMatchDetails.result,
    secondInnings: latestMatchDetails.second_innings,
    umpires: latestMatchDetails.umpires,
    venue: latestMatchDetails.venue,
  }
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = updatedMatchDetails

  return (
    <div className="latest-match-details-bg">
      <div className="first-container">
        <div className="details-text-container">
          <p className="competing-team-name-text">{competingTeam}</p>
          <p className="competing-date">{date}</p>
          <p className="competing-team-venue">{venue}</p>
          <p className="competing-team-result">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          className="competing-team-logo"
          alt={`latest match ${competingTeam}`}
        />
      </div>
      <div className="innings-details-container">
        <p className="innings-title">First Innings</p>
        <p className="innings-value-text">{firstInnings}</p>
        <p className="innings-title">Second Innings</p>
        <p className="innings-value-text">{secondInnings}</p>
        <p className="innings-title">Man Of the Match</p>
        <p className="innings-value-text">{manOfTheMatch}</p>
        <p className="innings-title">Umpires</p>
        <p className="innings-value-text">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
