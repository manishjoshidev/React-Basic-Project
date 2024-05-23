import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { IoIosCloseCircle } from "react-icons/io";
import { FaFileAlt } from "react-icons/fa";
import { IoIosCloudDownload } from "react-icons/io";

const tagColors = {
  red: "bg-red-600",
  green: "bg-green-600",
  // Add more colors as needed
};

function Card({ data }) {
  if (!data) {
    return null; // Return null or a default placeholder card if data is not provided
  }

  return (
    <motion.div
      drag
      className="relative flex-shrink-0 w-60 h-72 rounded-[30px] bg-zinc-900/90 text-white px-5 py-10 overflow-hidden"
    >
      <FaFileAlt size={24} />
      <p className="text-sm leading-tight mt-10 py-2 font-semibold ">
        {data.desc}
      </p>
      <div className="absolute bottom-12 w-full left-0 px-8 flex items-center justify-between">
        <h5 className="text-sm">{data.filesize}</h5>
        <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
          {data.close ? (
            <IoIosCloseCircle />
          ) : (
            <IoIosCloudDownload size="1.2em" color="#000" />
          )}
        </span>
      </div>
      {data.tag && data.tag.isOpen && (
        <div
          className={`tag w-full py-4 left-0 flex justify-center ${
            tagColors[data.tag.tgColor]
          }`}
        >
          <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
        </div>
      )}
    </motion.div>
  );
}

Card.propTypes = {
  data: PropTypes.shape({
    desc: PropTypes.string.isRequired,
    filesize: PropTypes.string.isRequired,
    close: PropTypes.bool.isRequired,
    tag: PropTypes.shape({
      isOpen: PropTypes.bool.isRequired,
      tagTitle: PropTypes.string.isRequired,
      tgColor: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Card;
