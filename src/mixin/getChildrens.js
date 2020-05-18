export default (children) => {
  if (children.lenght) {
    return children;
  } else {
    return children.map((e) => {
      return { [e.props.name]: e.props.children };
    });
  }
};
