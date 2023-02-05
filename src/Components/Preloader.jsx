import React, {useState} from 'react';
import PropagateLoader from "react-spinners/PropagateLoader";

const Preloader = () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#CA8A04");
  return (
    <div className="preloader">
      <PropagateLoader
        color={color}
        loading={loading}
        size={10}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Preloader;
