import SC from './profile.sc';

const ProfileSection = () => {
  return (
    <SC.Contents>
      <SC.Question>Or wanna get straight to the point?</SC.Question>
      <SC.Header>Who is this guy?</SC.Header>
      <SC.Info>
        I am John Carlo Austria and I am a frontend developer based in the
        philippines, I specialize in creating websites using HTML,CSS ,
        JavaScript and React
      </SC.Info>
      <SC.Header>What am I currently Doing?</SC.Header>
      <SC.Info>
        I am currently studying at a Public School in the Philippines, as I am
        learning in this school, I am also teaching myself web development
        online.
      </SC.Info>
      <SC.Header>Are you currently looking for work?</SC.Header>
      <SC.Info>
        As I have said, I am currently studying and I only work on this website
        whenever I have the free time. I can make websites, but only when I have
        time for it.
      </SC.Info>
    </SC.Contents>
  );
};

export default ProfileSection;
