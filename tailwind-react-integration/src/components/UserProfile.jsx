function UserProfile() {
  return (
    <div className="
      user-profile 
      bg-gray-100 
      hover:shadow-xl
      p-4 sm:p-4 md:p-8 
      max-w-xs sm:max-w-xs md:max-w-sm 
      mx-auto my-20 
      rounded-lg shadow-lg 
      text-center
    ">
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="
          rounded-full 
          w-24 h-24 
          hover:scale-110
          transition-transform 
          duration-300 ease-in-out
          sm:w-24 sm:h-24 
          md:w-36 md:h-36 
          mx-auto
          border-4 
          border-blue-500
        "
      />
      <h1 className="
        text-lg 
        hover:text-blue-500
        sm:text-lg 
        md:text-xl 
        text-blue-800 
        my-4
      ">
        John Doe
      </h1>
      <p className="
        text-sm 
        sm:text-sm 
        md:text-base 
        text-gray-600
      ">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;
