export default function Footer() {
  return (
    <footer className="py-12 border-t border-gray-100 mt-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-sm text-gray-500">
          © {new Date().getFullYear()} Hu Xinting. All rights reserved.
        </div>
        
        <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-200 hover:border-blue-300 transition-colors cursor-pointer">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <a href="mailto:huxinting.iris@gmail.com" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
            huxinting.iris@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
