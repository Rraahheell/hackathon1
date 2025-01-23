import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'; // Import icons from react-icons

const OurTeam = () => {
  const teamMembers = [
    {
      name: 'Username',
      profession: 'Profession',
      image: 'https://s3-alpha-sig.figma.com/img/0a05/d6ce/0fd1eeff9355b162a7e7c01605dd3c55?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mHAon7AI~cJ~6xfUKHbbfdz4pwTfYuFjbQ9zd7DEY5Cr8sPlzpiVyMYDrIrLl1tz~vnhemds-cRt50aqts0VCemEjiQiwJFowtuPlzLDQLbzx7~y4Mjcgazgm4Xs9rTYY~dEraMHz6~yfi4ghnqYOD2~wGgcACl9DjXdgN4wUoAudGlDH3CxPVjQuQT54x4C7MYVpOer2R1fv64XsAksjSBbYHPQ2lN4TvuOh-RbYmvvrzTstFRozNI0g0GZqGBHSnyHpDHuKvpX3kiTJXpnKTrBjVLExVu09CFBYrykxrDkgQj8EoY7twIuR5vvtxlcPGlk1F0fq6tkAIqPkBqspQ__',
      social: {
        facebook: '#',
        instagram: '#',
        twitter: '#',
      },
    },
    {
      name: 'Username',
      profession: 'Profession',
      image: 'https://s3-alpha-sig.figma.com/img/5426/8cf0/4ad0f612e9f8f311e9d1c6bbd31a03f3?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kRZwi4TLMkwyUuJbwg7ajTQ8t280mHB6Wj70p3z87zPu5Pn9ZfkP2ERQqBQ8FjRPi3NG88LHya8Pc2S2BkrooMrL94ph9QMkxS9JG4qt~1NQ8h4fL1KDSJnhl~mcIUUfH8Q-LRgQ59bznPMbFazSMibWh4oNswEvMwUSAiBjTsH6uyGYT6WigAJXLwXLlkYk0B6pdcW0vGmtseY5Ch3h1TA3KzsHnhb20apy8WqRc1ejhITTs4g7NgB4FYDIQk17rZd0X7mO0PG0FyG3AV9wkp-OY~4xBhB5UxuNyVx1zPf4pw~Y8uy5nBbE0M7dB4-wPeOFQ5ifWSaImdwjlYK3dg__',
      social: {
        facebook: '#',
        instagram: '#',
        twitter: '#',
      },
    },
    {
      name: 'Username',
      profession: 'Profession',
      image: 'https://s3-alpha-sig.figma.com/img/24a6/b8d9/efd1b9c2401fb0702dc41f18a42ed89c?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=luFu0kaA00-ElEMJ6qoC7gIEAS~9YAgm7-HOMwUHpxnD-U9oXuc-FM5EWwvL1Ma8GBc2mUWX8mT0WXnfP61eBjDBPHL63NIWf8gqdsvkgjv25TViiQch8u3KFOHduTQjVxkjWEyRqm7OT75nrhr29HImNZ-kjANI1B0zOpInkV6lRJ2dO2SOSnV-VosnvaUWyTNRrdFcPkf-deR778taXlu29R~je0EddkGFSIzNJS0iCtqpcEwC~QNoQlxyAC8P64jSrt6547CieqdpjOZguaUFMFRizirkMzfWp9ztXO2I6UdPYs5o6a-CRyPFZ~MQ6Pzf2tD59frPcRPl1HwoIg__',
      social: {
        facebook: '#',
        instagram: '#',
        twitter: '#',
      },
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800">Meet Our Team</h2>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          and quantum mechanics.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden w-80 text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={member.image}
              alt={`${member.name}`}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
              <p className="text-gray-600">{member.profession}</p>
              <div className="flex justify-center space-x-4 mt-4">
                {/* Facebook Icon */}
                <a href={member.social.facebook} aria-label="Facebook">
                  <FaFacebook className="w-6 h-6 text-sky-500 hover:text-sky-700" />
                </a>
                {/* Instagram Icon */}
                <a href={member.social.instagram} aria-label="Instagram">
                  <FaInstagram className="w-6 h-6 text-sky-500 hover:text-sky-700" />
                </a>
                {/* Twitter Icon */}
                <a href={member.social.twitter} aria-label="Twitter">
                  <FaTwitter className="w-6 h-6 text-sky-500 hover:text-sky-700" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
