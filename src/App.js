import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import UsersCard from "./components/UsersCard";
import Spinner from "./components/Spinner";
import Hero from "./components/Hero";
import Pagination from "./components/Pagination";

function App() {
  const [isFetching, setIsFetching] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  // get users from API
  const fetchUsers = async () => {
    if (!isFetching) {
      return;
    }

    setIsLoading(true);

    // making the request to the API with pagination parametors
    const response = await fetch(
      `https://reqres.in/api/users?page=${currentPage}`
    );
    // making the request as json
    const jsonUsers = await response.json();
    setUsers(jsonUsers);
    setIsLoading(false);
  };
  useEffect(() => {
    if (isFetching) {
      fetchUsers();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, itemsPerPage, isFetching]);

  const handleFetchUsers = () => {
    setIsFetching(true);

    setIsLoading(true);
    setTimeout(() => {
      fetchUsers();
    }, 1000); // Display spinner for a minimum of 5 seconds
  };

  return (
    <>
      <div>
        <Header />
        <Hero handleFetchUsers={handleFetchUsers} />
        {isLoading ? (
          <Spinner minDuration={2} />
        ) : (
          <div className="album py-5 bg-body-tertiary">
            <div className="container text-center d-flex justify-content-center align-items-center">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 ">
                {users.data ? (
                  users.data.map(
                    ({ id, email, avatar, first_name, last_name }) => {
                      return (
                        <UsersCard
                          key={id}
                          email={email}
                          avatar={avatar}
                          first_name={first_name}
                          last_name={last_name}
                        />
                      );
                    }
                  )
                ) : (
                  <div className="alert alert-danger w-100" role="alert">
                    No User Data...
                  </div>
                )}
              </div>
            </div>
            <Pagination
              currentPage={currentPage}
              totalItems={users.total}
              itemsPerPage={itemsPerPage}
              onPageChange={setCurrentPage}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
