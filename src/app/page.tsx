import Image from "next/image";
import { Alert } from "@/components/bootstrap";
export default function Home() {
  return (
    <div>
      <Alert>
        <p>
          This is a sample project to showcase and learn the new{" "}
          <strong>Next</strong>
        </p>
        <ul>
          <li>static and dynamic server-side rendering</li>
          <li>incremental static regeneration</li>
          <li>client-side rendering</li>
          <li>route handlers (API endpoints)</li>
          <li>meta-data API</li>
          <li>and more</li>
        </ul>
        <p className="mb-0">
          Every page uses a different approach to{" "}
          <strong>fetching caching</strong>
        </p>
      </Alert>
    </div>
  );
}
