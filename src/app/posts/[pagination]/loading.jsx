import { LoadingSkeleton } from "@/app/components";

//suspense გამოვიყენოთ სერვერსაიდ რენდერინგის დროს სანამ UI ელემენტები გამოჩნდება 
export default function Loading() {
    return <LoadingSkeleton pageName={"posts"} />;
}
