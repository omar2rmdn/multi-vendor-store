import { Button } from "@/components/ui/button";
import configPromise from "@payload-config";
import { getPayload } from "payload";

export default async function Home() {
  const payload = await getPayload({
    config: configPromise,
  });

  const data = await payload.find({
    collection: "categories",
    // depth: 0, // load only the id of subcategory
    depth: 1, // populate subcategory - all it's data
    where: {
      parent: {
        exists: false,
      },
    },
  });

  console.log(data);

  return (
    <div className="p-20">
      <Button variant={"reverse"}>Click Me</Button>
    </div>
  );
}
