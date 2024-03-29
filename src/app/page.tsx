import { Button, Divider } from "@nextui-org/react";
import { auth } from "@/auth";
import * as actions from "@/actions";
import TopicCreateForm from "@/components/topic/topic-create-form";
import TopicList from "@/components/topic/topic-list";
export default async function Home() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-xl m-2">Top Posts</h1>
      </div>
      <div className="border shadow py-3 px-2">
        <TopicCreateForm></TopicCreateForm>
        <Divider className="my-2"></Divider>
        <h3 className="text-lg mb-2">Topics</h3>
        <TopicList></TopicList>
      </div>
    </div>
  );
}
