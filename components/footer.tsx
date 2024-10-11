export default function Footer() {
  return (
    <div className="flex justify-center space-x-4 tracking-tight pb-8 px-8">
      <a
        href="https://www.linkedin.com/in/rudi-persson-2b500a8b/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-blue-500 "
      >
        linkedin
      </a>
      <a
        href="https://github.com/RudiPersson"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-blue-500 "
      >
        github
      </a>

      <a
        className="text-gray-400 hover:text-blue-500"
        href="mailto:rudipersson@gmail.com"
      >
        rudipersson@gmail.com
      </a>
    </div>
  );
}
