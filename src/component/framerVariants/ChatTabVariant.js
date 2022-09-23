let ChatAppVariant = {
  hidden: {
    y: 200,
    opacity: 0,
    borderRadius: 500,
  },
  visible: {
    opacity: 1,
    y: 0,
    borderRadius: 20,
    transition: {
      delay: 1.25,
      duration: 1,
    },
  },
};

export default ChatAppVariant;
