import './Card.css'

function Card(props) {
  const classes = 'card ' + props.className;
  return <article className={classes}>{props.children}</article>
}

export default Card;
