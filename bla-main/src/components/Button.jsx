function Button(props) {
  return (
    <Button
      className="bg-slate-400 p-2 rounded-md text-white"
      {...Button.props}
    >
      {props.children}
    </Button>
  );
}

export default Button;
