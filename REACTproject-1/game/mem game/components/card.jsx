 const Card = ({card,onClick}) => {
    return(
        <div className={'card ${card.isFlipped ? "flipped" : ""}'}onClick={() =>onClick() }>
        <div className="card-font">?</div>
        <div className="card-back">{card.value}</div>
        </div>
);
}; 
export default card;