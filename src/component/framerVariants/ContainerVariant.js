let containerVariant = {
  hidden: {
    y: 200,
    opacity: 0,
    borderRadius: 500,
  },
  visible: {
    opacity: 1,
    y: 0,
    borderRadius: 10,
    transition: {
      delay: 0.25,
      duration: 0.5,
      type: "tween",
      damping: 25,
    },
  },
};

export default containerVariant;
