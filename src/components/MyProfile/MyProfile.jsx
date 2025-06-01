import { use } from "react";
import { AuthContext } from "../../Authentication/AuthContext";

const MyProfile = () => {
  const { user } = use(AuthContext);

  return (
    <div className="my-4 py-10 flex items-center justify-center px-4">
      <div className="w-full max-w-md md:max-w-xl border p-6 md:p-10 bg-base-100/50 rounded-2xl shadow-2xl flex flex-col items-center">
        
        {/* Avatar */}
        <div className="w-24 h-24 mb-6">
          <div className="mask mask-squircle w-full h-full">
            <img
              src={
                user?.photoURL
                  ? user.photoURL
                  : "https://img.daisyui.com/images/profile/demo/distracted1@192.webp"
              }
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* User Info */}
        <div className="text-center space-y-4 w-full">
          <h3 className="text-xl md:text-2xl font-bold">
            Name: {user?.displayName || "Not Set"}
          </h3>
          <h3 className="text-xl md:text-2xl font-bold">
            Email: {user?.email || "Not Set"}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
