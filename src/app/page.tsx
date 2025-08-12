import MatchList from "@/modules/match/components/MatchList";
import LeagueList from "@/modules/league/components/LeagueList";

export default function HomePage() {
    return (
        <div className="container">
            <h1>Welcome to Scoreboard</h1>
            <p>Track leagues, matches, players, and standings for your teams.</p>

            <section className="card">
                <h1>Overview</h1>
                <section>
                    <h2>Upcoming Matches</h2>
                    <MatchList />
                </section>
                <section>
                    <h2>Leagues</h2>
                    <LeagueList />
                </section>
            </section>
        </div>
    );
}