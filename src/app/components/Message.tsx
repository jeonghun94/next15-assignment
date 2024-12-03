import React from "react";

interface MessageProps {
    type: "error" | "success";
    isPending?: boolean;
    message: string;
}

const Message: React.FC<MessageProps> = ({ type, isPending, message }) => {
    const baseClass = " text-center rounded-md";
    const typeClass = type === "error" ? "text-red-500" : "text-green-500";

    return (
        <div className={`${baseClass} ${typeClass}`}>{type === "success" && isPending ? "Loading..." : message}</div>
    );
};

export default Message;
