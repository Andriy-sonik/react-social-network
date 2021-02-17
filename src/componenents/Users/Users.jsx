import s from "./Users.module.css";
const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 0,
        fullName: "Andriy",
        status: "I am a boss",
        photoUrl:
          "https://img.discogs.com/JmSa8bVo5K-d35WRCwAX3U2-6K0=/236x316/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-253187-1484482768-5421.jpeg.jpg",
        followed: false,
        location: { city: "Minsk", country: "Belarus" },
      },
      {
        id: 1,
        fullName: "Masha",
        status: "I am a girl",
        photoUrl:
          "https://img.discogs.com/JmSa8bVo5K-d35WRCwAX3U2-6K0=/236x316/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-253187-1484482768-5421.jpeg.jpg",
        followed: true,
        location: { city: "Kyiv", country: "Ukrain" },
      },
      {
        id: 2,
        fullName: "Sasha",
        status: "I am a programmer",
        photoUrl:
          "https://img.discogs.com/JmSa8bVo5K-d35WRCwAX3U2-6K0=/236x316/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-253187-1484482768-5421.jpeg.jpg",
        followed: false,
        location: { city: "Lviv", country: "Ukrain" },
      },
    ]);
  }

  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} alt="" className={s.usersPhoto} />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};
export default Users;
