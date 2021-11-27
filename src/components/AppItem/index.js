import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <li className="app-lists">
      <img src={imageUrl} className="app-img" alt={appName} />
      <p className="appName">{appName}</p>
    </li>
  )
}

export default AppItem
