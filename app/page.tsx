import prisma from "./lib/prisma"
import InputArea from "./components/inputArea";
import Link from "next/link";
import Image from "next/image";
import {deletePost} from "@/actions/comment";
import { ButtonComp } from "./components/buttonComp";


export default async function Home() {
  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc"
    }
  });


  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="border border-red-500 p-9 rounded-md">
        <h1 className=" bold text-xl mb-4 text-center">All Pages ( {posts.length} )</h1>
        <ul>
          {posts.map((post?)=>(
            <li key={post?.id} className="flex items-center justify-between px-5 text-center">
              <Link href={`/posts/${post?.slug}`}>{post?.slug ?? ""}</Link>
                <ButtonComp id={post?.id!}/>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <InputArea />
      </div>
    </div>
  );
}
