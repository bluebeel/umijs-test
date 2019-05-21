import React from 'react';
import router from 'umi/router';

interface User {
  name: string;
}

const Index: React.FC = () => {
  const [user, setUser] = React.useState<User>({name: ""});

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/hello/${user.name}`);
  };

  return (
    <div className="mx-auto px-6 sm:px-8 lg:px-12 xl:px-24 xl:max-w-3xl">
      <div
        className="text-center md:text-left my-6 sm:my-8 md:my-16 lg:my-32">
        <div>
          <h1 className="text-5xl lg:text-6xl text-white font-normal"><span className="text-white sm:whitespace-no-wrap">Enter your name</span></h1>
          <form className="mt-8 sm:flex" onSubmit={submit}>
            <input id="fieldEmail" name="name"
                   className="block w-full sm:w-auto px-6 py-4 bg-white rounded sm:rounded-none sm:rounded-l flex-1 text-lg"
                   type="text" placeholder="Your name" required
                   value={user.name} onChange={e => setUser({...user, name: e.target.value})}/>
              <button
                className="block mt-2 sm:mt-0 w-full sm:w-auto px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white rounded sm:rounded-none sm:rounded-r"
                type="submit">Submit
              </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Index;
