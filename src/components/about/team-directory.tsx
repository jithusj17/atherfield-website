import { team } from "@/data/team";

// Directory rows use a tighter 1.15 line height than body copy (from the Figma table style).
const rowText = "font-serif text-xl leading-[1.15] font-normal tracking-[-0.04em]";

/**
 * "Meet the team" table. Desktop shows name, title and contact columns.
 * Mobile (Figma Mobile frame) stacks name, title and email in one cell with no column labels.
 */
export function TeamDirectory() {
  return (
    <section
      id="team"
      aria-labelledby="team-heading"
      className="flex w-full scroll-mt-16 flex-col items-center gap-8 bg-surface px-5 py-10 text-black md:gap-16 md:py-[120px]"
    >
      <h2 id="team-heading" className="type-heading-lg w-full max-w-[1500px]">
        Meet the team
      </h2>
      <table className="w-full max-w-[1500px] border-separate border-spacing-0 text-left">
        <thead className="type-caption sr-only md:not-sr-only md:table-header-group">
          <tr>
            <th scope="col" className="pb-2.5 font-normal">Name</th>
            <th scope="col" className="pb-2.5 font-normal">Title</th>
            <th scope="col" className="pb-2.5 text-right font-normal">Contact</th>
          </tr>
        </thead>
        <tbody>
          {team.map((member, i) => {
            const cell = `border-b border-divider align-middle md:w-1/3 md:py-4 ${i === 0 ? "border-t" : ""}`;
            return (
              <tr key={i}>
                <td className={`${cell} py-6 md:pr-4`}>
                  <span className="type-title-lg block">{member.name}</span>
                  <span className={`mt-4 block md:hidden ${rowText}`}>{member.title}</span>
                  <a href={`mailto:${member.email}`} className={`mt-4 block underline md:hidden ${rowText}`}>
                    {member.email}
                  </a>
                </td>
                <td className={`${cell} hidden pr-4 md:table-cell ${rowText}`}>{member.title}</td>
                <td className={`${cell} hidden text-right md:table-cell ${rowText}`}>
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
