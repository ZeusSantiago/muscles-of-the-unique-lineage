import React from "react";

const GroupPage = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="w-32 text-center font-extrabold border-[2px] px-4 rounded-md border-slate-600 bg-lc-#B4D0CA shadow-lg">
          Group Name
        </div>
      </div>
      <div className="flex ml-4"></div>
      <div className="ml-4 font-bold w-20 text-center border-[1.5px] px-4 rounded-md border-slate-500 bg-lc-#B4D0CA">
        Posts:
      </div>
      <div className="bg-lc-#FCEDD5 px-4 rounded-lg m-4 border-[1.5px] border-black ">
        <div>
          <div className="font-bold">Title:</div>
          <p>
            Description: Lorem ipsum, dolor sit amet consectetur adipisicing
            edivt. Repellendus ipsum assumenda dolores quibusdam, corporis
            molestias quo ad quidem minus ex rerum. Ipsam, voluptatibus.
            Voluptatum provident voluptas quisquam. At nam quaerat autem, dolor
            ut, sapiente quam aspernatur obcaecati fugiat itaque commodi
            delectus reiciendis placeat pariatur voluptas corporis qui, numquam
            tempora provident.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GroupPage;
