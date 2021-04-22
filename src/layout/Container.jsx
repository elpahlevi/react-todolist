/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import PropTypes from "prop-types";
// import React from "react";

const Container = ({
  children,
  flexDirection,
  flexWrap,
  justifyContent,
  alignItems,
  alignContent,
  height,
  minHeight
}) => {
  const containerStyles = css`
    display: flex;
    flex-direction: ${flexDirection};
    flex-wrap: ${flexWrap};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
    align-content: ${alignContent};
    height: ${height};
    min-height: ${minHeight};
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
  alignContent: "stretch",
  height: "auto",
  minHeight: "initial"
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
  ]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  minHeight: PropTypes.string
};

export default Container;
