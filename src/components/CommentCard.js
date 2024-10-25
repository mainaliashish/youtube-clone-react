import React from "react";
function CommentCard({ info }) {
  const { snippet } = info;
  console.log(snippet);
  return (
    <div className="">
      <div className="w-1/2 rounded overflow-hidden shadow-lg p-5 bg-slate-400 m-3">
        <div className="px-6 py-4">
          <p className="text-white text-base">{snippet?.textDisplay}</p>
        </div>
      </div>
    </div>
  );
}
export default CommentCard;
