import PostCreateForm from "@/components/post/post-create-form";
import PostList from "@/components/posts/post-list";
import { fetchPostByTopicSlug } from "@/db/queries/post";

interface TopicShowProps {
  params: {
    slug: string;
  };
}

const topicShowPage = ({ params }: TopicShowProps) => {
  const { slug } = params;
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-2xl font-bold mb-2">{slug}</h1>
        <PostList fetchData={() => fetchPostByTopicSlug(slug)}></PostList>
      </div>
      <div>
        <PostCreateForm slug={slug}></PostCreateForm>
      </div>
    </div>
  );
};

export default topicShowPage;
