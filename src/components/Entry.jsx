import React from "react";
import PropTypes from "prop-types"; // Import prop-types

function Entry(props) {


  return (
    <div className="term">

    <dt>
      <span className="emoji" role="img" aria-label="Tense Biceps">
        {props.emoji}
      </span>
      <span>{props.name}</span>
    </dt>
    <dd>{props.meaning}</dd>

  </div>



  );
}





export default Entry;
