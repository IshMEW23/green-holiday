import { redirect } from "next/navigation";

export default function Home() {
  // Open the admin login page when the project starts
  redirect("/admin/login");
}