import { HabitColors, habitColors } from "../data/habit.colors";

interface HabitPreviewProps {
    id: string;
    title: string;
    description?: string;
    color: HabitColors;
    streak?: number;
    onClick?: () => void;
}

export default function HabitPreview(props: HabitPreviewProps) {
    const { title, description, color, streak, onClick } = props;

    return (
        <button
            onClick={onClick}
            className={`text-white hover:opacity-80 active:scale-96 transition-all duration-200 flex flex-1 rounded-xl px-4 py-2 shadow-lg ${habitColors[color]} cursor-pointer`}
        >
            <div className="flex flex-1 flex-col gap-1 text-left">
                <div className="font-bold text-2xl">
                    {title}
                </div>
                {description && (
                    <div className="text-sm opacity-90">
                        {description}
                    </div>
                )}
            </div>
            {streak !== undefined && streak > 0 && (
                <div className="flex items-center gap-1 ml-4">
                    <span className="text-2xl">🔥</span>
                    <span className="text-lg font-bold">
                        {streak}
                    </span>
                </div>
            )}
        </button>
    );
}