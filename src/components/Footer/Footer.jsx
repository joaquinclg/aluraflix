import { Link } from "react-router-dom";

import { FaGithub } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-background">
      <div className="border-t px-4 py-8">
        <div className="flex items-center justify-between">
          <p className="text-sm">
            &copy; {year} <span>Joaquin Lucero</span>
          </p>
          <div>
            <ul className="flex items-center justify-end gap-2">
              <li>
                <Link to="https://github.com/demonjl" target="_blank">
                  <FaGithub className="text-muted-foreground" size={20} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
