import { useRef, useState } from "react";
import { GithubUser } from "./GithubUser";

export function GithubUsers() {
  const [users, setUsers] = useState([]);
  const inputRef = useRef(null)

  function handleFetchUser(event) {
    event.preventDefault()
    setUsers([
      ...users,
      inputRef.current?.value
    ])
  }

  return (
    <>
      <form onSubmit={handleFetchUser}>
        <input type="text" name="username" ref={inputRef} placeholder="Add a user to search..."/>
        <button>Search</button>
      </form>
      <ul>
        {users.map((user) => (
          <GithubUser username={user} />
        ))}
      </ul>
    </>
  );
}
