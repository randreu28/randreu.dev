import Link from "next/link";
import { portfolio } from "../content";
import { useRouter } from "next/router";

function ProjectOverview(props) {
  const router = useRouter();
  const content = portfolio[router.locale];
  return (
    <div className="rounded overflow-hidden shadow-lg bg-gray-800 duration-500 justify-evenly flex flex-col">
      <img className="w-full h-80 object-cover" src={props.src} alt="" />
      <div className="py-5">
        <div className="px-6 py-4 space-y-2 sm:space-y-0">
          <div className="mb-2 flex justify-between">
            <h1 className="text-xl font-bold">{props.title}</h1>
            <p className="text-gray-400 text-base font-base pb-2">
              {props.date}
            </p>
          </div>
          <p className="text-gray-400 text-base">{props.text}</p>
        </div>
        <div className="px-6 pt-4 pb-2 mb-8">
          {props.inDev ? (
            <span className="inline-block bg-myPrimary rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
              In Development
            </span>
          ) : null}
          <span className="inline-block bg-slate-600 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
            {props.tag1}
          </span>
          <span className="inline-block bg-slate-600 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
            {props.tag2}
          </span>
          <span className="inline-block bg-slate-600 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
            {props.tag3}
          </span>
        </div>
        <Link href={props.href}>
          <a className="bg-gradient-to-br from-mySecondary to-myPrimary rounded-lg px-3 py-2 font-bold ml-6">
            {content.cta}
          </a>
        </Link>
      </div>
    </div>
  );
}

export default ProjectOverview;
