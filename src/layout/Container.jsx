/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import PropTypes from "prop-types";
// import React from "react";

const Container = ({
  children,
  flexDirection,
  flexWrap,
  justifyContent,
  alignItems,
  alignContent
}) => {
  const containerStyles = css`
    display: flex;
    flex-direction: ${flexDirection};
    flex-wrap: ${flexWrap};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
    align-content: ${alignContent};
  `;
  return (
    <div className="flex-container" css={containerStyles}>
      {children}
    </div>
  );
};

Container.defaultProps = {
  flexDirection: "row",
  flexWrap: "nowrap",
  justifyContent: "flex-start",
  alignItems: "stretch",
  alignContent: "stretch"
};

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  flexDirection: PropTypes.oneOf([
    "row",
    "row-reverse",
    "column",
    "column-reverse"
  ]),
  flexWrap: PropTypes.oneOf(["nowrap", "wrap", "wrap-reverse"]),
  justifyContent: PropTypes.oneOf([
    "flex-start",
    "flex-end",
    "start",
    "end",
    "left",
    "right",
    "center",
    "space-between",
    "space-around",
    "space-evenly"
  ]),
  alignItems: PropTypes.oneOf([
    "stretch",
    "flex-start",
    "start",
    "self-start",
    "flex-end",
    "end",
    "self-end",
    "center",
    "baseline",
    "first baseline",
    "last baseline"
  ]),
  alignContent: PropTypes.oneOf([
    "stretch",
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "space-evenly",
    "start",
    "end",
    "baseline",
    "first baseline",
    "last baseline"
  ])
};

export default Container;
