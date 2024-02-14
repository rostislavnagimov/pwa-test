"use client"
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallButtonClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();

      deferredPrompt.userChoice.then((choiceResult: { outcome: string }) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
      });

      setDeferredPrompt(null);
    }
  };

  return (
    <main className={styles.main}>
      <button className={styles.button} onClick={handleInstallButtonClick}>
        Install
      </button>
      <iframe src="https://www.wikipedia.org/" className={styles.iframe}></iframe>
    </main>
  );
}
