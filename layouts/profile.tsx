/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext, useState, useEffect, useMemo } from "react";
import * as SC from "./profile.sc";
const ProfileSection = () => {
  return (
    <>
      <SC.ProfileHeader>Who am I?</SC.ProfileHeader>
      <SC.ProfileInfo>
        I am a student that is studying frontend development that is based in
        the philippines
      </SC.ProfileInfo>
      <SC.ProfileHeader>What am I currently doing?</SC.ProfileHeader>
      <SC.ProfileInfo>
        I am currently learning the fundamentals of web development (HTML, CSS,
        JavaScript).
      </SC.ProfileInfo>
      <SC.ProfileHeader>Can you currently build a website?</SC.ProfileHeader>
      <SC.ProfileInfo>
        Yes and No. Yes, because I built this with react along with other web
        technologies that will make this website more scalable and the code is
        also open source on github. And No, because currently, I cannot handle
        the complexity of a large enterprise application that uses react. I can
        only build websites that are small and usually cannot follow best
        practices because I am still bad at it.
      </SC.ProfileInfo>
    </>
  );
};
export default ProfileSection;
