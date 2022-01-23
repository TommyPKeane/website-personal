import React from "react";
import PropTypes from "prop-types";

export default function ArticleIntro(props,) {
  return null;
}

ArticleIntro.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  preFlourish: PropTypes.object,
  postFlourish: PropTypes.object,
};

ArticleIntro.defaultProps = {
  title: "Article Title",
  subTitle: "article subtitle goes here",
  preFlourish: {},
  postFlourish: {},
};
