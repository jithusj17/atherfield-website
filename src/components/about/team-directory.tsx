import { team } from "@/data/team";

// Directory rows use a tighter 1.15 line height than body copy (from the Figma table style).
const rowText = "font-serif leading-[1.15] font-normal tracking-[-0.04em]";

/**
 * "Meet the team" table. Desktop shows name, title and contact columns.
 * Small screens stack title and email under the name so long addresses never break mid-word.
 */
export function TeamDirectory() {
  return (
    <section
      id="team"
      aria-labelledby="team-heading"
      className="flex w-full scroll-mt-16 flex-col items-center gap-10 bg-surface px-5 py-20 text-black md:gap-16 md:py-[120px]"
    >
      <h2 id="team-heading" className="type-heading-lg w-full max-w-[1500px]">
        Meet the team
      </h2>
      <table className="w-full max-w-[1500px] border-separate border-spacing-0 text-left">
        <thead className="type-caption">
          <tr>
            <th scope="col" className="pb-2.5 font-normal">Name</th>
            <th scope="col" className="hidden pb-2.5 font-normal md:table-cell">Title</th>
            <th scope="col" className="hidden pb-2.5 text-right font-normal sm:table-cell">Contact</th>
          </tr>
        </thead>
        <tbody className="text-xl">
          {team.map((member, i) => {
            const cell = `border-b border-divider py-4 align-middle md:w-1/3 ${i === 0 ? "border-t" : ""}`;
            return (
              <tr key={i}>
                <td className={`${cell} type-title pr-4`}>
                  {member.name}
                  <span className={`mt-1 block text-xl text-muted md:hidden ${rowText}`}>
                    {member.title}
                  </span>
                  <a
                    href={`mailto:${member.email}`}
                    className={`mt-2 block text-lg underline sm:hidden ${rowText}`}
                  >
                    {member.email}
                  </a>
                </td>
                <td className={`${cell} hidden pr-4 md:table-cell ${rowText}`}>{member.title}</td>
                <td className={`${cell} hidden text-right sm:table-cell ${rowText}`}>
                  <a href={`mailto:${member.email}`} className="underline hover:opacity-70">
                    {member.email}
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
