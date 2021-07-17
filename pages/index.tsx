import Link from "next/link";

const index = () => {
  return (
    <div className="container">
      <div>
        <h1>Discord Superchater (Ealry Access)</h1>
        <Link href="/oauth/discord/redirect" replace>
          <a>ログイン</a>
        </Link>
      </div>
    </div>
  );
};
export default index;
