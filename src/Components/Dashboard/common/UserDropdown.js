import React from "react";
import Popper from "popper.js";
import Image from "../../../assets/images/pic.jpg"

import { withRouter } from "react-router-dom";
import firebase from "../../../firebase/config";
import { Auth } from "../../../context/authContext";

const UserDropdown = (props) => {

  // const [userState, setUserState] = useState(null);
  // const [userEmail, setUserEmail] = useState("");

  const { dispatch } = React.useContext(Auth);

  // useEffect(() => {
  //   firebase.getUserState().then(user => {
  //     if (user) {
  //       setUserState(user);
  //       setUserEmail(user.email);

  //     }
  //   });
  // });



  const logout = () => {
    firebase.logout();
    // setUserState(null);
    props.history.replace("/dashboard/login");
    return dispatch({
      type: "LOGOUT",
      payload: {}
    });
  }



  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    new Popper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-end"
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };


  // if (userState === null) {
  //   return <Redirect to='/' />
  // }

  return (
    <>
      <a
        className="text-gray-600 block"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={e => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <div className="items-center flex">
          <span className="w-12 h-12 text-sm text-white bg-gray-300 inline-flex items-center justify-center rounded-full">
            <img
              alt="..."
              className="w-full rounded-full align-middle border-none shadow-lg"
              src={Image}
            />
          </span>
        </div>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
        }
        style={{ minWidth: "12rem" }}
      >
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
          }
          onClick={e => e.preventDefault()}
        >
          Profile
        </a>
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
          }
          onClick={e => e.preventDefault()}
        >
          Settings
        </a>
        <div className="h-0 my-2 border border-solid border-gray-200" />


        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
          }
          onClick={logout}
        >
          Logout
        </a>



      </div>
    </>
  );
};

export default withRouter(UserDropdown);
