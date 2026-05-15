 const GameHeader = ({score, moves}) => {
    return (
        <div className="game-header">
            <h1>MEMORY CARD GAME</h1>
            <div className="stats">
                <div className="stats-item">
                    <span className="stat-label">Score:</span><span className="stat-value">{score}</span></div>
                <div className="stats-item">
                    <span className="stat-label">Moves:</span><span className="stat-value">{moves}</span></div>
            </div>
        </div>
    );
};
export default GameHeader;