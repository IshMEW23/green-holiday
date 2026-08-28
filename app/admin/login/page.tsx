import Image from "next/image";
import LoginForm from "@/components/auth/LoginForm";

export default function AdminLoginPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* Back to website link */}
      <div className="px-8 pt-7 md:px-20">
        <button className="text-sm text-[#66736a]">
          ← Back to Website
        </button>
      </div>

      {/* Main login section */}
      <div className="flex flex-1 flex-col items-center justify-center px-4">

        {/* Green Holiday logo */}
        <div className="mb-12 flex justify-center">
          <Image
            src="/image/loginlogo.png"
            alt="Green Holiday Logo"
            width={260}
            height={100}
            className="h-auto w-[300px] object-contain"
            priority
          />
        </div>

        {/* Login card */}
        <div className="w-full max-w-[500px] rounded-2xl border border-gray-200 bg-[#f5f7f5] p-10">
          <h2 className="mb-8 text-center font-serif text-3xl font-bold text-[#0b6b4b]">
            Admin Login
          </h2>

          <LoginForm />
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-[#f5f7f5] py-8 text-center text-sm text-[#66736a]">
        © 2026 Green Holiday (Pvt) Ltd. All Rights Reserved. Private Transport
        & Tours Service.
      </footer>
    </main>
  );
}