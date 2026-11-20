import Image from "next/image";

const values = [
  {
    icon: "/images/icon-clarity.svg",
    title: "Clarity drives action",
    body: "We believe better decisions start with better data—measured, visible, and trusted.",
  },
  {
    icon: "/images/icon-systems.svg",
    title: "Sustainability is a systems problem",
    body: "We build tools that help teams connect the dots between operations, impact, and accountability.",
  },
  {
    icon: "/images/icon-progress.svg",
    title: "Progress over perfection",
    body: "We support real-world momentum—helping organizations move from ambition to measurable change.",
  },
];

/** Three principle cards ("Value modules" in Figma). White cards on Home, grey cards on About. */
export function ValueCards({ tone = "white" }: { tone?: "white" | "grey" }) {
  const background = tone === "white" ? "bg-white" : "bg-surface";
  return (
    <ul className="relative grid w-full max-w-[1500px] gap-4 md:grid-cols-3">
      {values.map((v, i) => (
        <li
          key={v.title}
          aria-label={`Principle ${i + 1}`}
          className={`flex min-h-[246px] flex-col gap-6 rounded-2xl p-8 md:p-10 ${background}`}
        >
          <Image src={v.icon} alt="" width={42} height={42} />
          <div className="flex flex-col gap-2 text-black">
            <h3 className="type-title">{v.title}</h3>
            <p className="type-body">{v.body}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
