import React from "react";
import Tag from "./Tag";

// Icons
import ArrowLeft from '../assets/icons/CircleLeft.svg'
import CommentIcon from '../assets/icons/Comment.svg'
import { textMaxLength } from "../utils/functions";

const Card = ({data, color=null}, props) => {
    const { tag, title, content, comments } = data
    return (
        <div className="darkAnimation flex flex-col w-[420px] xl:w-[540px] h-72 text-slate-700 dark:text-white rounded-[32px] border-2 border-white border-opacity-35 bg-white dark:bg-black bg-opacity-60 dark:bg-opacity-10 backdrop-blur-[114px] shadow-lg py-4 px-8">
            <Tag color={color}>{tag}</Tag>
            <h1 className="font-Gilroy text-2xl xl:text-[34px] py-2">{title}</h1>
            <p className="text-xl font-medium leading-8 my-2 line-clamp-4 xl:line-clamp-3">{content}</p>
            <span className="flex items-center bg-violet rounded-full mt-1 xl:mt-8 p-1 w-fit">
                <img src={CommentIcon} alt="CommentIcon" />
                <p className="mx-2 text-[10px] text-white">{comments} نظر</p>
            </span>
            <div className="bg-violet rounded-bl-[30px] rounded-r-xl absolute left-1 bottom-1 p-3 2xl:p-4 h-fit">
                <img className="max-xl:h-7" src={ArrowLeft} alt="ArrowLeft" />
            </div>
        </div>
    );
};

export default Card;
