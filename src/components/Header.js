import React, { useState, useEffect } from "react";
import { IoMdMenu } from "react-icons/io";
import logo from "../assets/logo.png"
import user from "../assets/admin.jpg"
import { BiChevronDown } from "react-icons/bi";
import { BiKey } from "react-icons/bi";
import { IoIosLogOut } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux"
import * as actions from "../stores/actions"
import { path } from "../utils/contants"
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode"

const Header = (props) => {
    const content = props.content;
    const getValue = props.getValue;
    const setChange = props.setChange;
    const { token } = useSelector(state => state.auth)
    const email = token ? jwtDecode(token).email : "No user"
    const conTrolMenu = () => {
        getValue();
    }

    const [toggle, setToggle] = useState(false)
    const conTroler = () => {
        setToggle((prevToggle) => !prevToggle);
    }

    const navigate = useNavigate()
    const dispatch = useDispatch()

    return (
        <div className="flex justify-between items-center h-full px-4">
            <div className="flex items-center text-primary">
                <div className="lg:hidden">
                    <div className="flex items-center justify-start">
                        <IoMdMenu className="text-[2rem] xl:text-[2rem] cursor-pointer" onClick={conTrolMenu} />
                        <p className="ml-2 text-[12px] lg:text-[1rem]">{content}</p>
                    </div>
                </div>
                <div className="hidden lg:flex">
                    <div className="flex items-center">
                        <IoMdMenu className="text-[1rem] xl:text-[2rem]" />
                        <p className="ml-2 text-[12px] lg:text-[1rem]">{content}</p>
                    </div>
                </div>
            </div>
            <div className="p-4 w-[250px]">
                <img src={logo} alt="" className="h-full w-full" />
            </div>
            <div onClick={conTroler} className="flex items-center h-full mr-2 text-primary relative cursor-pointer">
                <div className="hover:text-orange-600 flex items-center h-full mr-2 text-primary cursor-pointer">
                    <img src={user} alt="" className={`w-[41px] h-[41px] rounded-full object-cover sm:mr-4`} />
                    <p className="text-primary cursor-pointer text-[13px] scale-x-0 w-0 sm:w-[57%] sm:scale-100 lg:text-[1rem] mx-2">{email}</p>
                    <BiChevronDown className={`${toggle ? "rotate-180 transition-all duration-100" : "transition-all"} mx-2 text-[20px] xl:text-[25px] cursor-pointer`} />
                </div>
                <div className={` ${toggle ? "opacity-100 transition-all duration-100" : ""} absolute top-full right-0 opacity-0 shadow-xl rounded-xl`}>
                    <div className="flex flex-col gap-2 bg-gray-100 py-3 px-4 rounded-xl">
                        <div className="flex items-center gap-4 hover:text-orange-700 cursor-pointer" onClick={() => setChange(true)}>
                            <BiKey className="text-[25px]" />
                            <p>Thay đổi mật khẩu</p>
                        </div>
                        <div className="flex items-center gap-4 hover:text-orange-700 cursor-pointer" onClick={() => { dispatch(actions.logout()); navigate(path.LOGIN) }}>
                            <IoIosLogOut className="text-[25px]" />
                            <p>Đăng xuất</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}


export default Header