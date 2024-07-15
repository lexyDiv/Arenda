/* eslint-disable react/prop-types */
/* eslint-disable react/style-prop-object */
const React = require('react');

function GameCard({ card }) {
  const {
    title, image, text1, text2, text3, id,
  } = card;

  return (
    <div
      className="card mb-3"
      style={{ maxWidth: '740px', backgroundColor: 'rgb(77, 77, 77)' }}
    >
      <div className="row g-0">
        <div className="col-md-4">
          <img src={image} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text1}</p>
            <p
              className="card-text"
              style={{
                color: 'cyan',
              }}
            >
              Важно :
            </p>
            <p className="card-text small">
              <small
                style={{
                  fontStyle: 'italic',
                  color: 'violet',
                }}
              >
                {text3}
              </small>
            </p>
            <p className="card-text small">
              <small
                style={{
                  fontStyle: 'italic',
                }}
              >
                {text2}
              </small>
            </p>

            <a className="a" href={`/${id}`}>
              <button type="button" className="btn btn-primary btn-sm">
                Start game
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

module.exports = GameCard;
