import React from "react";
import classNames from "classnames";

const styles = {
  hoverText: "transition-all duration-350",
  bold: "font-bold text-white", // Adjust color and other styles as needed
};

const BubbleButton = ({ text }) => {
  const characters = text.split("");

  return (
    <button className="grid h-screen place-content-center bg-black">
      <h2 className="text-center text-5xl font-thin text-indigo-300">
        {characters.map((child, idx) => (
          <span
            className={classNames(styles.hoverText, {
              [styles.bold]: idx === 0,
            })}
            key={idx}
          >
            {child}
          </span>
        ))}
      </h2>
    </button>
  );
};

export default BubbleButton;
