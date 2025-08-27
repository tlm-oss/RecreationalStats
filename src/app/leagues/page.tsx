import LeagueList from "@/modules/league/components/LeagueList";

export default function LeaguesPage() {
  return (
    <div className="container">
      <h1>Leagues</h1>
      <section className="card">
        <section>
          <h2>Active Leagues</h2>
          <LeagueList />
        </section>
        <section>
          <h2>Previous Leagues</h2>
          <LeagueList />
        </section>
      </section>
    </div>
  );
}
