export default function Card({ text, username, userImage, darkMode }) {
  return (
    <div className="card">
      <img className="card-profile-image" alt="user profile" src={userImage} />
      <div className="card-info">
        <p
          className={
            darkMode ? "card-username white-color" : "card-username gray-color"
          }
        >
          {username}
        </p>
        <p
          className={
            darkMode
              ? "card-text gray white-color"
              : "card-text light-gray black-color"
          }
        >
          {text}
        </p>
      </div>
    </div>
  );
}
