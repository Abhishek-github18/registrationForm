import Image from "next/image";

export default function Home() {
  const InnerComponent = () => {
    return(
      <h1>
        Inner Component
      </h1>
    )
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <h1 className="text-4xl font-bold text-center">
        Welcome to the Registration Form
      </h1>
      {/* <InnerComponent /> */}
      {InnerComponent()}
          </main>
  );
}
