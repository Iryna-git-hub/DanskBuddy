function formatMessageTime(date) {
  const messageDate = new Date(date);
  const now = new Date();
  const isToday = messageDate.toDateString() === now.toDateString();

  const yesterday = new Date();
  yesterday.setDate(now.getDate() - 1);
  const isYesterday = messageDate.toDateString() === yesterday.toDateString();

  const time = messageDate.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  if (isToday) return time;
  if (isYesterday) return `I går ${time}`;
  return messageDate.toLocaleDateString([], { day: "2-digit", month: "short" });
}

export default function MessageBubble({ message, isMine }) {
  return (
    <div className={isMine ? "message-row sent" : "message-row received"}>
      <div className="message-bubble">
        <div>{message?.text}</div>
        {message?.createdAt && (
          <span className="text-xs opacity-60 block mt-1">
            {formatMessageTime(message.createdAt)}
          </span>
        )}
      </div>
    </div>
  );
}
