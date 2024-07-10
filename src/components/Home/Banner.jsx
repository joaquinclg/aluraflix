import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Banner = ({ video }) => {
  return (
    <>
      <div className="h-full w-full bg-card-foreground text-white">
        {/* Mobile */}
        <div className="relative flex aspect-[1/1] h-full w-full items-end justify-center md:hidden">
          <div>
            <img
              src={video.imagen}
              alt={video.titulo}
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black from-20% via-transparent to-black"></div>
          </div>
          <div className="relative p-10 text-center">
            <div>
              <h1 className="text-xl font-bold first-letter:uppercase sm:text-2xl">
                {video.titulo}
              </h1>
              <p className="mt-1 text-muted-foreground first-letter:uppercase">
                {video.categoria}
              </p>
            </div>
            <div>
              <Link
                to={video.link}
                rel="nopener noreferrer"
                target="_blank"
                className="mt-3 inline-block rounded-lg border px-4 py-1 font-medium transition duration-200 hover:bg-border hover:text-foreground"
              >
                Ver ahora
              </Link>
            </div>
          </div>
        </div>
        {/* Desktop */}
        <div className="relative flex h-full w-full items-center justify-between max-md:hidden">
          <div className="aspect-[5/4] h-full w-[50%] p-10">
            <div className="flex h-full w-full flex-col justify-center">
              <p className="mb-1.5 text-muted-foreground first-letter:uppercase">
                {video.categoria}
              </p>
              <h1 className="text-lg font-bold sm:text-2xl lg:text-4xl 3xl:text-5xl">
                {video.titulo}
              </h1>
              <p className="mt-3 line-clamp-3 max-w-screen-sm text-sm max-md:hidden 3xl:text-lg">
                {video.descripcion}
              </p>

              <div className="mt-3">
                <Link
                  to={video.link}
                  rel="nopener noreferrer"
                  target="_blank"
                  className="mt-3 inline-block rounded-lg border px-4 py-1 font-medium transition duration-200 hover:bg-border hover:text-foreground"
                >
                  Ver ahora
                </Link>
              </div>
            </div>
          </div>
          <div className="relative aspect-[5/4] w-[50%] overflow-hidden">
            <img
              src={video.imagen}
              alt={video.titulo}
              className="absolute inset-0 h-full w-full object-cover object-left"
            />
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-card-foreground from-10% via-transparent via-60% to-transparent"></div>
          </div>
        </div>
      </div>
    </>
  );
};

Banner.propTypes = {
  video: PropTypes.object.isRequired,
};

export default Banner;
