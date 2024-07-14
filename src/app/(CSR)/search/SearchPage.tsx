"use client";

import { UnsplashImage } from "@/models/unsplash-image";
import Image from "next/image";
import { FormEvent, useState } from "react";
import { Alert, Button, Form, Spinner } from "react-bootstrap";
import styles from "./Search.module.css";

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState<UnsplashImage[] | null>(
    null
  );

  const [resultLoading, setResultLoading] = useState(false);
  const [resultLoadingIsError, setResultLoadingIsError] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const query = formData.get("query")?.toString().trim();

    if (query) {
      try {
        setSearchResults(null);
        setResultLoadingIsError(false);
        setResultLoading(true);
        const response = await fetch("/api/search?query=" + query);
        const images: UnsplashImage[] = await response.json();
        setSearchResults(images);
      } catch (error) {
        console.error(error);
        setResultLoadingIsError(true);
      } finally {
        setResultLoading(false);
      }
    }
  }

  return (
    <div>
      <Alert>
This page fetches data <strong>client-side</strong>. In order to not lea API credentials, the request is sent to NextJs <strong>route handler</strong>that runs on the server. this route handler then fetches the data from the Unsplash ApI and returns it to the client

      </Alert>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="search-input">
          <Form.Label>Search Query</Form.Label>
          <Form.Control name="query" placeholder="E.g. cats,dogs, ..." />
        </Form.Group>
        <Button type="submit" className="mb-3" disabled={resultLoading}>
          Search
        </Button>
      </Form>
      <div className="d-flex flex-column align-items-center">
        {resultLoading && <Spinner animation="border" />}
        {resultLoadingIsError && <p>Something went wrong. Please try again.</p>}
        {searchResults?.length === 0 && <p>Nothing found.Try something else</p>}
      </div>

      {searchResults && (
        <>
          {searchResults.map((image) => (
            <Image
              src={image.urls.raw}
              width={250}
              height={250}
              alt={image.description}
              key={image.urls.raw}
              className={StyleSheet.image}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default SearchPage;
