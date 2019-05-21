import React from 'react';

interface Props {
  match: {
    isExact: boolean,
    params: {[key: string]: string},
    path: string,
    url: string
  }
}

const Hello: React.FC<Props> = ({ match }) => {
  return (
    <div className="mx-auto px-6 sm:px-8 lg:px-12 xl:px-24 xl:max-w-3xl">
      <div
        className="text-center md:text-left my-6 sm:my-8 md:my-16 lg:my-32">
        <div>
          <h1 className="text-5xl lg:text-6xl text-white font-normal whitespace-normal"><span className="text-white sm:whitespace-no-wrap">Hello</span> <span className="text-yellow-500">{match.params.name} !</span></h1>
        </div>
      </div>
    </div>
  );
};

export default Hello;
