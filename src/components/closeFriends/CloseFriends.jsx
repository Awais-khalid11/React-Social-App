import "./closeFriends.css"


export default function CloseFriends({user}) {
  return (
    <li className="sidebarFreind">
    <img className="sidebarFriendImage" src={user.profilePicture} alt="" />
    <span className="sidebarFriendName">{user.username}</span>
  </li>

  )
}
