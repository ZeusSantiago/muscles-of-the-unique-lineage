import React from "react";

const GroupPage = () => {
  return (
    <div>
      <div className="flex ml-4">
        <div className="text-center font-extrabold border-[1.5px] px-4 rounded-md border-slate-500 bg-lc-#B4D0CA">
          Group Name
        </div>
      </div>
      <div className="bg-lc-#FCEDD5 px-4 rounded-lg m-4 border-[1.5px] border-black ">
        <ul>
          <div className="font-bold">Posts:</div>
          <div className="font-bold">Title:</div>
          <p>
            Description: Lorem ipsum, dolor sit amet consectetur adipisicing
            eult. Repellendus ipsum assumenda dolores quibusdam, corporis
            molestias quo ad quidem minus ex rerum. Ipsam, voluptatibus.
            Voluptatum provident voluptas quisquam. At nam quaerat autem, dolor
            ut, sapiente quam aspernatur obcaecati fugiat itaque commodi
            delectus reiciendis placeat pariatur voluptas corporis qui, numquam
            tempora provident.
          </p>
        </ul>
      </div>
    </div>
  );
};

export default GroupPage;
