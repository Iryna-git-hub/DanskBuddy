const events = [
  { day: "18", month: "JUN", time: "17:00", label: "Speaking & Debate Meetup" },
  { day: "21", month: "JUN", time: "19:00", label: "Buddy Session" },
];

export default function EventCard() {
  return (
    <div className="card">
      <h3
        style={{
          fontSize: "0.95rem",
          fontWeight: 700,
          color: "var(--color-foreground)",
          margin: "0 0 4px",
        }}
      >
        Kommende begivenheder
      </h3>
      {events.map((ev) => (
        <div key={ev.day + ev.month} className="event">
          <div
            style={{
              minWidth: 44,
              textAlign: "center",
              background: "var(--color-background)",
              borderRadius: 8,
              padding: "6px 10px",
            }}
          >
            <div
              style={{
                fontSize: "1.1rem",
                fontWeight: 700,
                color: "var(--color-foreground)",
                lineHeight: 1.1,
              }}
            >
              {ev.day}
            </div>
            <div
              style={{
                fontSize: "0.65rem",
                fontWeight: 600,
                color: "var(--color-neutral)",
                letterSpacing: "0.05em",
              }}
            >
              {ev.month}
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <span
              style={{
                fontSize: "0.875rem",
                fontWeight: 600,
                color: "var(--color-foreground)",
              }}
            >
              {ev.label}
            </span>
            <span style={{ fontSize: "0.8rem", color: "var(--color-neutral)" }}>
              {ev.time}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
