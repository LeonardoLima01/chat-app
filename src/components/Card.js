export default function Card({ text, username, userImage }) {
  return (
    <div className="card">
      <img className="card-profile-image" alt="user profile" src={userImage} />
      <div className="card-info">
        <p className="card-username">{username}</p>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
}
