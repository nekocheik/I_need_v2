export default (children) => {
  if (children.lenght) {
    children;
  } else {
    children.map((e) => {
      return { [e.props.name]: e.props.children };
    });
  }
};
