import {
  ArrowTopRightOnSquareIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/20/solid";
import Link from "next/link";

interface Props extends React.ComponentProps<typeof Link> {
  href: string;
  title: string;
  company: string;
  dateStart: Date;
  dateEnd: Date;
  technologies: string[];
  children?: React.ReactNode;
}

export default function Card({
  title,
  company,
  children,
  dateEnd,
  dateStart,
  technologies,
  ...props
}: Props) {
  const formatDate = (date: Date) =>
    date.toLocaleString("default", { month: "short", year: "numeric" });
  const formattedStartDate = formatDate(dateStart);
  const formattedEndDate =
    dateEnd.getDate() === new Date().getDate()
      ? "Present"
      : formatDate(dateEnd);

  return (
    <Link {...props} target="_blank">
      <div className="hover:bg-my-orange/10 duration-200 rounded-xl p-3 space-y-2">
        <h2 className="text-2xl font-bold flex items-center line-clamp-1 gap-2">
          <span>{title}</span>
          <ArrowTopRightOnSquareIcon className="size-5" />
        </h2>
        <p className="text-sm text-gray-500 flex gap-2">
          <BuildingOffice2Icon className="size-5" />
          <span>{company}</span>
        </p>
        <p className="text-sm text-gray-500">
          {formattedStartDate} - {formattedEndDate}
        </p>
        {children}
        <div className="flex gap-5 py-3 flex-wrap">
          {technologies.map((tech) => (
            <p
              className="px-4 text-sm py-1 rounded-xl text-my-orange bg-my-pink/10 w-fit line-clamp-1"
              key={tech}
            >
              {tech}
            </p>
          ))}
        </div>
      </div>
    </Link>
  );
}
