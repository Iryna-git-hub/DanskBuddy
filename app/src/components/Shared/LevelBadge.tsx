export type Level = "a1" | "a2" | "b1" | "b2" | "native";

interface Props {
  level: Level;
}

const BASE =
  "inline-flex items-center justify-center px-[10px] py-[5px] rounded-sm text-xs font-extrabold";
const VARIANT: Record<Level, string> = {
  a1: "bg-secondary-light text-secondary-dark",
  a2: "bg-secondary-light text-secondary-dark",
  b1: "bg-primary-light text-primary",
  b2: "bg-primary-light text-primary",
  native: "bg-primary-pale text-primary-dark",
};

export default function LevelBadge({ level }: Props) {
  const displayLevel = level === "native" ? "Native" : level.toUpperCase();

  return <span className={`${BASE} ${VARIANT[level]}`}>{displayLevel}</span>;
}
