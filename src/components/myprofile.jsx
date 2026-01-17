
import "./myProfile.css";




export let MyProfile = () => {
  return (
    <div className="profile-card">
      <div className="profile-header">
        <img
          src="https://i.pinimg.com/736x/36/b0/49/36b04975b58950927a2b7b4937039928.jpg"
          alt="Profile"
          className="profile-img"
        />
        <h2>Arjun Pandey</h2>
        <p className="role">Student | BTech CSE AI</p>
      </div>

      <div className="profile-details">
        <p><strong>Age:</strong> 20</p>
        <p><strong>Height:</strong> 5'7"</p>
        <p><strong>Weight:</strong> 55 kg</p>
        <p><strong>Email:</strong> arjun@example.com</p>
        <p><strong>Location:</strong> India</p>
      </div>

      <button className="edit-btn">Edit Profile</button>
    </div>
  );
};