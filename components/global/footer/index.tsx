export default function Footer() {
  return (
    <footer className="pt-8">
      <div className="text-center bg-black text-gray-200 py-4">
        <p>
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
        <p className="text-sm">Built with passion and code.</p>
      </div>
    </footer>
  );
}
