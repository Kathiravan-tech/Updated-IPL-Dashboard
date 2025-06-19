import './index.css'

const LatestMatch = props => {
  const {latestMacthDetails} = props
  const updatedMatchDetails = {
    competingTeam: latestMacthDetails.competing_team,
    competingTeamLogo: latestMacthDetails.competing_team_logo,
    date: latestMacthDetails.date,
    firstInnings: latestMacthDetails.first_innings,
    id: latestMacthDetails.id,
    manOfTheMatch: latestMacthDetails.man_of_the_match,
    matchStatus: latestMacthDetails.match_status,
    result: latestMacthDetails.result,
    secondInnings: latestMacthDetails.second_innings,
    umpires: latestMacthDetails.umpires,
    venue: latestMacthDetails.venue,
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
