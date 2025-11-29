const API_BASE_URL = 'http://localhost:3000';

type HttpMethod = 'GET' | 'POST';

async function request<T>(
  method: HttpMethod,
  path: string,
  options: {
    query?: Record<string, string | number | boolean | undefined>;
    body?: unknown;
  } = {},
): Promise<T> {
  const url = new URL(path, API_BASE_URL);

  if (options.query) {
    Object.entries(options.query).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        url.searchParams.append(String(key), String(value));
      }
    });
  }

  const res = await fetch(url.toString(), {
    method,
    headers:
      method === 'POST'
        ? { 'Content-Type': 'application/json' }
        : undefined,
    body: method === 'POST' && options.body
      ? JSON.stringify(options.body)
      : undefined,
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(
      `API ${method} ${url.toString()} failed (${res.status}) ${text}`,
    );
  }

  if (res.status === 204) {
    return undefined as T;
  }

  return (await res.json()) as T;
}

function get<T>(
  path: string,
  query?: Record<string, string | number | boolean | undefined>,
) {
  return request<T>('GET', path, { query });
}

function post<T>(path: string, body?: unknown) {
  return request<T>('POST', path, { body });
}

export interface User {
  username: string;
  totalPoints: number;
  level: number;
  badges: string[];
}

export function createUser(username: string) {
  return post<User>('/users', { username });
}

export function getUser(username: string) {
  return get<User>(`/users/${encodeURIComponent(username)}`);
}

export interface SleepHabit {
  bedTime: string;
  wakeTime: string;
}

export interface StudyHabit {
  pomodoroCount: number;
  totalMinutes?: number;
}

export interface PhysicalEntry {
  activity: string;
  durationMinutes: number;
}

export interface ReadEntry {
  bookTitle: string;
  minutes: number;
}

export interface CustomHabit {
  id: string;
  name: string;
  value: number;
  unit?: string;
}

export interface HabitsSummary {
  username: string;
  habits: {
    sleep: SleepHabit | null;
    study: StudyHabit | null;
    physical: PhysicalEntry[];
    read: ReadEntry[];
    custom: CustomHabit[];
  };
}

export function setDefaultSleepHabit(username: string) {
  const body = {
    username,
    bedTime: '23:00',
    wakeTime: '07:00',
  };
  return post<SleepHabit>('/habits/sleep', body);
}

export function getSleepHabit(username: string) {
  return get<{ username: string; sleep: SleepHabit | null }>(
    '/habits/sleep',
    { username },
  );
}

export function setDefaultStudyHabit(username: string) {
  const body = {
    username,
    pomodoroCount: 4,
    totalMinutes: 100,
  };
  return post<StudyHabit>('/habits/study', body);
}

export function getStudyHabit(username: string) {
  return get<{ username: string; study: StudyHabit | null }>(
    '/habits/study',
    { username },
  );
}

export function addDefaultPhysicalEntry(username: string) {
  const body = {
    username,
    activity: 'Walk',
    durationMinutes: 30,
  };
  return post<PhysicalEntry>('/habits/physical', body);
}

export function getPhysicalEntries(username: string) {
  return get<{ username: string; physical: PhysicalEntry[] }>(
    '/habits/physical',
    { username },
  );
}

export function addDefaultReadEntry(username: string) {
  const body = {
    username,
    bookTitle: 'Atomic Habits',
    minutes: 20,
  };
  return post<ReadEntry>('/habits/read', body);
}

export function getReadEntries(username: string) {
  return get<{ username: string; read: ReadEntry[] }>(
    '/habits/read',
    { username },
  );
}

export function addDefaultCustomHabit(username: string) {
  const body = {
    username,
    id: 'drink-water',
    name: 'Drink water',
    value: 8,
    unit: 'glasses',
  };
  return post<CustomHabit>('/habits/custom', body);
}

export function getCustomHabits(username: string) {
  return get<{ username: string; custom: CustomHabit[] }>(
    '/habits/custom',
    { username },
  );
}

export function getAllHabits(username: string) {
  return get<HabitsSummary>('/habits/all', { username });
}

export interface StreakInfo {
  username: string;
  currentStreak: number;
  level: number;
  lastCompletedDate: string | null;
  totalPoints: number;
}

export function completeDay(username: string, date?: string) {
  const body: { username: string; date?: string } = { username };
  if (date) body.date = date;
  return post<StreakInfo>('/habits/complete-day', body);
}

export function getStreakInfo(username: string) {
  return get<StreakInfo>('/habits/streak', { username });
}

export interface GeminiReport {
  id: string;
  createdAt: string;
  type: 'daily' | 'weekly' | 'monthly';
  summary?: string;
  rawContent?: string;
}

export function generateDailyAnalysis(username: string) {
  const body = {
    username,
    type: 'daily' as const,
  };
  return post<GeminiReport>('/analysis/gemini', body);
}

export function getAllAnalysis(username: string) {
  return get<{ username: string; geminiReports: GeminiReport[] }>(
    '/analysis/gemini',
    { username },
  );
}

export function getLatestAnalysis(username: string) {
  return get<{ username: string; lastReport: GeminiReport | null }>(
    '/analysis/gemini/latest',
    { username },
  );
}
