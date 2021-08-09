import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({
  currentPage,
  onPageChanged,
  totalUsersCount,
  pagesSize, users,
  ...props}
) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pagesSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalItemsCount={totalUsersCount}
        pagesSize={pagesSize}
      />
      {users.map((u) => ( <User user={u}
       followingInProgress={props.followingInProgress}
        key={u.id} 
        unfollow={props.unfollow}
        follow={props.follow}
        />
      ))}
    </div>
  );
};

export default Users;
