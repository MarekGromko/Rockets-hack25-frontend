import { HabitColors, habitColors } from "../data/habit.colors";

interface HabitPreviewProps {
    id: string;
    title: string;
    description?: string;
    color: HabitColors;
    streak?: number;
    onClick?: () => void;
    interactive?: boolean;
}

export default function HabitPreview(props: HabitPreviewProps) {
    const { title, description, color, streak, onClick, interactive = true } = props;

    const content = (
        <>
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
                </div>
            )}
        </>
    );

    const baseClassName = `text-white flex flex-1 rounded-xl px-4 py-2 shadow-lg ${habitColors[color]}`;

    if (interactive) {
        return (
            <button
                onClick={onClick}
                className={`${baseClassName} hover:opacity-80 active:scale-96 transition-all duration-200 cursor-pointer`}
            >
                {content}
            </button>
        );
    }

    return (
        <div className={baseClassName}>
            {content}
        </div>
    );
}