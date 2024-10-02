"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-4">
      <div className="container mx-auto text-center italic font-serif">
        <p>
          ES Analysis - {`© ${new Date().getFullYear()}`} - All rights reserved.
        </p>
        <p className="mt-2">
          Powered by ES Innovative - Research and Analytics.
        </p>
      </div>
    </footer>
  );
}
