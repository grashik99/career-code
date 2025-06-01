import { use } from "react";
import { AuthContext } from "../../Authentication/AuthContext";
import { useNavigate } from "react-router";

const Settings = () => {
  const { user, updateName } = use(AuthContext);
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    updateName({ displayName: name, photoURL: photo })
      .then(() => {
        // Profile updated!
        // ...
        form.reset();
        navigate("/myProfile");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="card bg-base-100 w-[350px] mx-auto md:mt-12 shrink-0 shadow-2xl ">
      <div className="card-body">
        <form onSubmit={handleUpdate} className="fieldset">
          <label className="label">Name</label>
          <input
            type="text"
            className="input"
            name="name"
            defaultValue={user.displayName ? user.displayName : "Give A Name"}
            placeholder="Name"
          />
          <label className="label">PhotoURL</label>
          <input
            type="url"
            className="input"
            name="photo"
            placeholder="PhotoURL"
            defaultValue={user.photoURL ? user.photoURL : "Give A Link"}
          />
          <button type="submit" className="btn btn-neutral mt-4">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};
export default Settings;
