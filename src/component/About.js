import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Loading...",
        location: "Loading...",
        avatar_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSez5Hhwz8qtjcctv1WFL6Td8NVdHUtSw12hw&usqp=CAU",
        bio: "Loading...",
      },
    };
  }

  async componentDidMount() {
    const res = await fetch("https://api.github.com/users/vishalbaghel11");
    const data = await res.json();
    this.setState({ userInfo: data });
  }

  render() {
    const { name, location, avatar_url, bio } = this.state.userInfo;
    return (
      <div className="flex justify-center items-center py-10">
        <div className="bg-white shadow-lg rounded-2xl p-6 w-80 text-center border hover:shadow-2xl transition-all duration-300">
          <img
            className="w-24 h-24 mx-auto rounded-full border-4 border-gray-200 shadow-md"
            src={avatar_url}
            alt="User avatar"
          />
          <h3 className="text-2xl font-semibold mt-4 text-gray-800">
            {name}
          </h3>
          <h4 className="text-gray-600 mt-2">
            📍 {location ? location : "Not available"}
          </h4>
          <p className="text-sm text-gray-500 mt-3">{bio}</p>
        </div>
      </div>
    );
  }
}

export default UserClass;
