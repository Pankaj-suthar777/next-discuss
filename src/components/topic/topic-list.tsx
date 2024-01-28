import { db } from "@/db";
import { Chip } from "@nextui-org/react";
import Link from "next/link";

export default async function TopicList() {
  const topics = await db.topic.findMany();
}
