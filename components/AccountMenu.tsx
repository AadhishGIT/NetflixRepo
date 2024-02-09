import React from "react";
import { signOut } from "next-auth/react";
import useCurrentUser from "@/hooks/useCurrentUser";
import { BsFillTriangleFill } from "react-icons/bs";

interface AccountMenuProps {
  visible?: boolean;
}

const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {
  const { data } = useCurrentUser();
  if (!visible) {
    return null;
  }
  return (
    <div className="absolute top-10 right-0">
      <BsFillTriangleFill className="text-white p-1 mr-9" />
      <div className="bg-black w-56 absolute top-3 right-0 py-4 flex-col border-2 border-gray-800 flex">
        <div className="flex flex-col gap-3">
          <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
            <img
              className="w-8 rounded-md"
              src="/images/default-blue.png"
              alt=""
            />
            <p className="text-white text-sm group-hover/item:underline">
              {data?.name}
            </p>
          </div>
          <hr className="bg-gray-600 border-0 h-px my-1" />
          <div
            onClick={() => signOut()}
            className="px-3 text-center text-white text-sm hover:underline"
          >
            Sign out of Netflix
          </div>
        </div>
      </div>
    </div>
  );
};
export default AccountMenu;
