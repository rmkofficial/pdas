function ProfileCard(props) {
  const {title,handle,image} = props;
  return (
    <div>
      <img src={image} alt="pda logo"/>
      <div>Title is: {title}</div>
      <div>Handle is: {handle}</div>
    </div>
  );
}

export default ProfileCard;
