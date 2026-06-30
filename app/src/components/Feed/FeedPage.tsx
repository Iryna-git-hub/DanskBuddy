import { useMemo, useState } from "react";
import { useApp } from "../../context/AppContext";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import CreatePost from "./CreatePost";
import PostCard from "./PostCard";
import RightPanel from "./RightPanel";
import type { Post } from "./Post";

export default function FeedPage() {
  const { posts } = useApp() as { posts: Post[] };
  const [search, setSearch] = useState("");

  const filteredPosts = useMemo(() => {
    const value = search.trim().toLowerCase();
    if (!value) return posts;
    return posts.filter(
      (post) =>
        post.content.toLowerCase().includes(value) ||
        post.authorName.toLowerCase().includes(value)
    );
  }, [posts, search]);

  return (
    <div
      className="flex overflow-hidden bg-background -m-8"
      style={{ height: "calc(100vh - 64px)" }}
    >
      {/* Sidebar — desktop only */}
      <Sidebar />

      {/* Main content */}
      <div className="flex flex-col flex-1 lg:ml-[300px] min-w-0">
        <TopBar onSearch={setSearch} />

        <div className="flex-1 overflow-y-auto pt-[72px] lg:pt-[90px]">
          <div className="p-4 lg:p-8">
            <div className="grid gap-6 lg:gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
              {/* Feed */}
              <main className="flex flex-col gap-4 lg:gap-6 min-w-0">
                <CreatePost />
                <div className="flex flex-col gap-4 lg:gap-5">
                  {filteredPosts.length > 0 ? (
                    filteredPosts.map((post) => (
                      <PostCard key={post.id} post={post} />
                    ))
                  ) : (
                    <div className="bg-white rounded-2xl shadow-card p-10 text-center">
                      <p className="text-neutral">Ingen opslag fundet</p>
                    </div>
                  )}
                </div>
              </main>

              {/* Right panel — desktop only */}
              <aside className="hidden lg:flex flex-col gap-5">
                <RightPanel />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
