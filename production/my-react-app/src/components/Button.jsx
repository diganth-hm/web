/*contact button*/
function Contact({ className = "" }) {
    return (

        <button className={`contact ${className}`}>Book a call</button>
    )
}
export { Contact };
/*sample button*/
function Sample({ className = "" }) {
    return (

        <button className={`sample ${className}`}>Get free sample</button>

    )
}
export { Sample };
/*team button*/
function Team({ className = "" }) {
    return (

        <button className={`team ${className}`}>Meet the team</button>

    );
}
export { Team };

/*our service button*/
function OurService({ className = "" }) {
    return (
        <button className={`ourservice ${className}`}>Our Services</button>
    );
}
export { OurService };


/*know more button*/
function KnowMore({ className = "" }) {
    return (
    <button className={`knowmore ${className}`}>Know more</button>
    );
}
export { KnowMore };