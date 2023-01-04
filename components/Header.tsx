import Link from "next/link";
import { ShoppingCartIcon } from "./ShoppingCartIcon";

export function Header() {
  return (
    <nav className="flex items-center justify-between border-b border-neutral-700 p-6">
      <Link href="/">
        <svg
          className="mx-auto h-7 fill-current text-pink-500 hover:text-pink-400"
          viewBox="0 0 385 369"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path d="m186.31 104.93v-69.39l-60.1-34.699973-60.1 34.699973v69.39l60.1 34.7z" />
            <path d="m252.42 219.44v-69.4l-60.1-34.7-60.1 34.7v69.4l60.1 34.7z" />
            <path d="m186.31 333.95v-69.4l-60.1-34.7-60.1 34.7v69.4l60.1 34.7z" />
            <path d="m120.2 219.44v-69.4l-60.1-34.7-60.1 34.7v69.4l60.1 34.7z" />
            <path d="m384.64 219.44v-69.4l-60.1-34.7-60.1 34.7v69.4l60.1 34.7z" />
            <path d="m318.53 104.93v-69.39l-60.1-34.699973-60.1 34.699973v69.39l60.1 34.7z" />
            <path d="m318.53 333.95v-69.4l-60.1-34.7-60.1 34.7v69.4l60.1 34.7z" />
          </g>
        </svg>
      </Link>
      <Link href="/cart">
        <ShoppingCartIcon />
      </Link>
    </nav>
  );
}
