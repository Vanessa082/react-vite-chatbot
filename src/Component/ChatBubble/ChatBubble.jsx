import PropTypes from "prop-types";

import styles from "./styles.module.css";

const ChatBubble = ({ message, origin, error, loading }) => {
  const direction = origin === "bot" ? "left" : "right";
  return (
    <div
      className={`${styles.container} ${styles[direction]} ${
        loading ? styles["dot-elastic"] : null
      } ${error ? styles.error : ""}`}
    >
      {message}
    </div>
  );
};

export default ChatBubble;

ChatBubble.propTypes = {
  message: PropTypes.string,
  origin: PropTypes.string,
  error: PropTypes.bool,
  loading: PropTypes.bool,
};
