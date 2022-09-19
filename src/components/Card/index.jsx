import "./style.scss";

const Card = ({item}) => {
    return (
        <div className="portfolio-card" key={item.key}>
        <img src={item.cover} alt="cover" className="portfolio-cover" />
        <div className="content">
          <div className="content-header">
            <div className="card-title">{item.title}</div>
            <ul className="card-description">{item.description.map(item => <li>{item}</li>)}</ul>
          </div>
          <div className="buttons">
            <a href={item.url} target="blank">demo</a>
            <a href={item.repo} target="blank">repo</a>
          </div>

        </div>
      </div>
    )
}

export default Card;