export default (props) => {
  return (
    <div className="card">
      <div className="img" />
      <div className="content">
        <div className="title">{ props.title }</div>
        <div className="body">{ props.body }</div>
      </div>
    </div>
  )
}