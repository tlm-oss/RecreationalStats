import TeamList from "@/modules/team/components/TeamList";

export default function TeamsPage() {
  return (
    <div className="container">
      <h1>My Teams</h1>
      <section className="card">
        <section>
          <h2>Active Teams</h2>
          <TeamList />
        </section>
        <section>
          <h2>Previous Teams</h2>
          <TeamList />
        </section>
      </section>
    </div>
  );
}
