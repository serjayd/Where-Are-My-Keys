import { CAST_DATA } from "@/config/cast.data";
import MemberCard from "./MemberCard";

export default function Members() {
  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
      {CAST_DATA.map((item, index) => (
        <div
          key={item.name}
          className={`
        col-span-1
        ${index < 2 ? "lg:col-span-3" : "lg:col-span-2"}
      `}
        >
          <MemberCard item={item} />
        </div>
      ))}
    </section>
  );
}
