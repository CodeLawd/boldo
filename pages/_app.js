import { PageLayout, PageTransition } from "@/components";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <PageLayout>
        <PageTransition>
          <Component {...pageProps} />
        </PageTransition>
      </PageLayout>
    </div>
  );
}
