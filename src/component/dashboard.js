function Dashboard(props) {
  return (
    <div>
      <h1>Welcome to dashboard</h1>
      <pre>Login {props.user}</pre>
    </div>
  );
}

export default Dashboard;
