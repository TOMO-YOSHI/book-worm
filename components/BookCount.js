import React from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";

const BookCount = (props) => {
  const { title, count } = props;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 20 }}>{title}</Text>
      <Text>{count}</Text>
    </View>
  );
};

BookCount.propTypes = {
  count: PropTypes.number,
  title: PropTypes.string.isRequired,
};

BookCount.defaultProps = {
  title: "Title",
};

export default BookCount;
