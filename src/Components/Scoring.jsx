import { useState,useEffect } from 'react';

import './Scoring.css';

function Scoring() {
   const [teamOne, setTeamOne] = useState(() => {
        return localStorage.getItem("teamOne") || "";
    });
    const [teamTwo, setTeamTwo] = useState(() => {
        return localStorage.getItem("teamTwo") || "";
    });
    const [scoreTeamOne, setScoreTeamOne] = useState(() => {
        return Number(localStorage.getItem("scoreTeamOne")) || 0;
    });
    const [scoreTeamTwo, setScoreTeamTwo] = useState(() => {
        return Number(localStorage.getItem("scoreTeamTwo")) || 0;
    });
    const [isMatchStarted, setIsMatchStarted] = useState(() => {
        const saved = localStorage.getItem("isMatchStarted");
        return saved ? JSON.parse(saved) : false;
    });

    // 2. Sync state changes to localStorage
    useEffect(() => {
        localStorage.setItem("teamOne", teamOne);
        localStorage.setItem("teamTwo", teamTwo);
        localStorage.setItem("scoreTeamOne", scoreTeamOne.toString());
        localStorage.setItem("scoreTeamTwo", scoreTeamTwo.toString());
        localStorage.setItem("isMatchStarted", JSON.stringify(isMatchStarted));
    }, [teamOne, teamTwo, scoreTeamOne, scoreTeamTwo, isMatchStarted]);

    const handleStartMatch = () => {
        if (teamOne && teamTwo) {
            setIsMatchStarted(true);
        } else {
            alert("Please enter names for both teams!");
        }
    };

    const handleGoalTeamOne = () => {
        setScoreTeamOne(scoreTeamOne + 1);
    };

    const handleRevertTeamOne = () => {
        if (scoreTeamOne !== 0) {
            setScoreTeamOne(scoreTeamOne - 1);
        } else {
            alert("Score cannot be negative");
        }
    };

    const handleRevertTeamTwo = () => {
        if (scoreTeamTwo !== 0) {
            setScoreTeamTwo(scoreTeamTwo - 1);
        } else {
            alert("Score cannot be negative");
        }
    };

    const handleGoalTeamTwo = () => {
        setScoreTeamTwo(scoreTeamTwo + 1);
    };

    return (
        <div className="scoring-page">
            <div className="scoring-card">
                {!isMatchStarted ? (
                    <>
                        <div className="field-group">
                            <input
                                type="text"
                                placeholder="Team 1 Name"
                                value={teamOne}
                                onChange={(e) => setTeamOne(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Team 2 Name"
                                value={teamTwo}
                                onChange={(e) => setTeamTwo(e.target.value)}
                            />
                        </div>
                        <br />
                        <button className="start-button" onClick={handleStartMatch}>
                            Start Match
                        </button>
                    </>
                ) : (
                    <>
                        <div className="scoreboard">
                            <h1>{teamOne} <br />
                            <span>vs</span>
                            <br /> {teamTwo}</h1>
                            <h1>{scoreTeamOne} : {scoreTeamTwo}</h1>
                        </div>

                        <hr />

                        <div className="button-group">
                            <button className="primary-button" onClick={handleGoalTeamOne}>
                                Score {teamOne}
                            </button>
                            <button className="primary-button" onClick={handleGoalTeamTwo}>
                                Score {teamTwo}
                            </button>
                        </div>
                        <br />

                        <div className="revert-group">
                            <button className="secondary-button" onClick={handleRevertTeamOne}>
                                Revert {teamOne}
                            </button>
                            <button className="secondary-button" onClick={handleRevertTeamTwo}>
                                Revert {teamTwo}
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Scoring;