import HabitPreview from "../components/HabitPreview";

export default function DashboardPage() {
    return (
        <div className="w-full h-full p-8">
            <div className="flex flex-col max-w-2xl mx-auto space-y-4">
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
                    title="Exercise"
                    description="Complete a 20-minute workout"
                    color="green"
                    streak={12}
                    onClick={() => console.log('Exercise habit clicked')}
                />
                <HabitPreview
                    id="4"
                    title="Exercise"
                    description="Complete a 20-minute workout"
                    color="orange"
                    streak={12}
                    onClick={() => console.log('Exercise habit clicked')}
                />
            </div>
        </div>
    );
}