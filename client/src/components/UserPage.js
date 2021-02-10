import React, { useEffect, useState } from "react";
import axios from "axios";
import { CopyToClipboard } from "react-copy-to-clipboard";

function UserPage({
  e: {
    match: {
      params: { name },
    },
  },
}) {
  const [user, setUser] = useState();
  const [err, setErr] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const main = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:4001/api/users/${name}`
        );
        setUser(data);
      } catch (err) {
        setErr(err);
        console.error(err);
      }
    };
    main();
  }, [name]);

  if (user) {
    return (
      <div>
        <h2>This page is for {user.name}</h2>
        <CopyToClipboard
          onCopy={() => setCopied(true)}
          text={window.location.href}
        >
          <button>Share</button>
        </CopyToClipboard>
        {copied ? <h3>Page link copied to clipboard!</h3> : null}
      </div>
    );
  } else if (err) {
    return <h2>{err.response.data}</h2>;
  } else {
    <h2>Loading...</h2>;
  }

  return <div></div>;
}

export default UserPage;
