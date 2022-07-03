export default function JobCard(props) {
  /* Looking back at this 2021 code.. I would really do it differently*/

  let counter1 = 0;
  let counter2 = 0;

  let obj = [
    props.isJunior,
    props.isSenior,
    props.isFrontEnd,
    props.isBackEnd,
    props.isReact,
  ];

  for (let i = 0; i < obj.length; i++) {
    if (obj[i] === true) {
      counter1++;
    }
  }

  let obj1 = [
    props.junior,
    props.senior,
    props.frontEnd,
    props.backEnd,
    props.react,
  ];

  for (let i = 0; i < obj.length; i++) {
    if (obj[i] === obj1[i]) {
      counter2++;
    }
  }

  if (
    !props.isJunior &&
    !props.isSenior &&
    !props.isFrontEnd &&
    !props.isBackEnd &&
    !props.isReact
  ) {
    return (
      <div className="bg-white rounded drop-shadow-xl p-5 px-8 flex mx-[5%] justify-between space-x-28 relative -z-10">
        <div className="flex space-x-8">
          <img
            className="rounded-full aspect-square my-auto"
            src={props.src}
            alt={[]}
          ></img>
          <div className="flex flex-col justify-center space-y-1">
            <div className="flex flex-row space-x-2">
              <p className="text-cyan-700 font-bold pr-4 my-auto">
                {props.business}
              </p>
              {props.isNew ? (
                <p className="hidden sm:inline lg rounded-full bg-cyan-700 text-white p-1 px-3 my-auto text-sm font-semibold">
                  NEW!
                </p>
              ) : (
                <></>
              )}
              {props.isFeatured ? (
                <p className="hidden sm:inline rounded-full bg-gray-600 text-white p-1 my-auto px-3 text-sm font-semibold">
                  FEATURED
                </p>
              ) : (
                <></>
              )}
            </div>
            <h1 className="font-bold text-xl lg:text-2xl ">{props.title}</h1>
            <p className="text-gray-500 hidden sm:inline">
              {props.date} • {props.time} • {props.location}
            </p>
          </div>
        </div>
        <div className="my-auto grid-cols-2 gap-3 lg:grid-cols-3 lg:gap-4 hidden md:grid">
          {props.junior ? (
            <p className="bg-LightCyan text-cyan-700 font-semibold rounded p-1 px-2 text-center">
              Junior
            </p>
          ) : (
            <></>
          )}
          {props.senior ? (
            <p className="bg-LightCyan text-cyan-700 font-semibold rounded p-1 px-2 text-center">
              Senior
            </p>
          ) : (
            <></>
          )}

          {props.frontEnd ? (
            <p className="bg-LightCyan text-cyan-700 font-semibold rounded p-1 px-2 text-center">
              FrontEnd
            </p>
          ) : (
            <></>
          )}
          {props.backEnd ? (
            <p className="bg-LightCyan text-cyan-700 font-semibold rounded p-1 px-2 text-center">
              BackEnd
            </p>
          ) : (
            <></>
          )}

          {props.react ? (
            <p className="bg-LightCyan text-cyan-700 font-semibold rounded p-1 px-2 text-center">
              React
            </p>
          ) : (
            <></>
          )}
        </div>
      </div>
    );
  } else if (counter1 === counter2) {
    return (
      <div className="bg-white rounded drop-shadow-xl p-5 px-8 flex mx-[5%] justify-between space-x-28 relative -z-10">
        <div className="flex space-x-8">
          <img
            className="rounded-full aspect-square my-auto"
            src={props.src}
            alt={[]}
          ></img>
          <div className="flex flex-col justify-center space-y-1">
            <div className="flex flex-row space-x-2">
              <p className="text-cyan-700 font-bold pr-4 my-auto">
                {props.business}
              </p>
              {props.isNew ? (
                <p className="hidden sm:inline lg rounded-full bg-cyan-700 text-white p-1 px-3 my-auto text-sm font-semibold">
                  NEW!
                </p>
              ) : (
                <></>
              )}
              {props.isFeatured ? (
                <p className="hidden sm:inline rounded-full bg-gray-600 text-white p-1 my-auto px-3 text-sm font-semibold">
                  FEATURED
                </p>
              ) : (
                <></>
              )}
            </div>
            <h1 className="font-bold text-xl lg:text-2xl ">{props.title}</h1>
            <p className="text-gray-500 hidden sm:inline">
              {props.date} • {props.time} • {props.location}
            </p>
          </div>
        </div>
        <div className="my-auto grid-cols-2 gap-3 lg:grid-cols-3 lg:gap-4 hidden md:grid">
          {props.junior ? (
            <p className="bg-LightCyan text-cyan-700 font-semibold rounded p-1 px-2 text-center">
              Junior
            </p>
          ) : (
            <></>
          )}
          {props.senior ? (
            <p className="bg-LightCyan text-cyan-700 font-semibold rounded p-1 px-2 text-center">
              Senior
            </p>
          ) : (
            <></>
          )}

          {props.frontEnd ? (
            <p className="bg-LightCyan text-cyan-700 font-semibold rounded p-1 px-2 text-center">
              FrontEnd
            </p>
          ) : (
            <></>
          )}
          {props.backEnd ? (
            <p className="bg-LightCyan text-cyan-700 font-semibold rounded p-1 px-2 text-center">
              BackEnd
            </p>
          ) : (
            <></>
          )}

          {props.react ? (
            <p className="bg-LightCyan text-cyan-700 font-semibold rounded p-1 px-2 text-center">
              React
            </p>
          ) : (
            <></>
          )}
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
