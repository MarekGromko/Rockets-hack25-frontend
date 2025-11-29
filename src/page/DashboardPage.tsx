import HabitPreview from "../components/HabitPreview";

export default function DashboardPage() {
    let totalStreak: number = 7; // Calculate based on consecutive days all habits were completed

    return (
        <div className="w-full h-full p-8 pb-32 overflow-scroll">
            <div className="flex flex-col max-w-xl mx-auto space-y-4">
                <HabitPreview
                    id="1"
                    title="Reading"
                    description="Read for 30 minutes daily"
                    color="red"
                    streak={5}
                    onClick={() => console.log('Reading habit clicked')}
                />
                <HabitPreview
                    id="2"
                    title="Exercise"
                    description="Complete a 20-minute workout"
                    color="blue"
                    streak={12}
                    onClick={() => console.log('Exercise habit clicked')}
                />
                <HabitPreview
                    id="3"
                    title="Study"
                    description="Study for 30-minutes and do your homework!"
                    color="green"
                    streak={12}
                    onClick={() => console.log('Exercise habit clicked')}
                />
                <HabitPreview
                    id="4"
                    title="Sleep"
                    description="Sleep for 8 hours!"
                    color="grey"
                    streak={12}
                    interactive={false}
                    onClick={() => console.log('Exercise habit clicked')}
                />
                
                {/* Overall Streak Section */}
                <div className="flex flex-col justify-center h-78 mt-8 p-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl shadow-lg text-white">
                    <div className="flex items-center justify-center gap-3">
                        <span className="text-5xl">🔥</span>
                        <div className="text-center">
                            <div className="text-4xl font-bold">{totalStreak}</div>
                            <div className="text-lg opacity-90">Day Streak</div>
                        </div>
                    </div>
                    <div className="mt-3 text-center text-sm opacity-90">
                        Keep going! You've completed an habit.s for {totalStreak} {totalStreak === 1 ? 'day' : 'days'} in a row
                    </div>
                </div>
            </div>
        </div>
    );
}