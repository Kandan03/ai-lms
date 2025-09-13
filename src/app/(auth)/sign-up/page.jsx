import { GalleryVerticalEnd } from "lucide-react"

import { LoginForm } from "@/components/login-form"

export default function SignUpPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2 fade-in">
      <div className="bg-muted relative hidden lg:block ">
        <video width="320" height="240" autoPlay loop muted className="absolute inset-0 h-full w-full object-cover">
          <source src="/monk.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-end">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div
              className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="size-4" />
            </div>
            Acme Inc.
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}
