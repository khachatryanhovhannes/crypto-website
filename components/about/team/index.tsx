import Image from "next/image";
import { TEAM } from "@/constants";

export default function Team() {
  return (
    <section className="mt-5">
      <h2 className="text-3xl font-bold p-3 text-white text-center">
        Our Team
      </h2>
      <p className="w-full lg:w-2/3 mx-auto text-center text-gray-200">
        Meet the brilliant minds behind our platform. Our team is a diverse
        group of experts, innovators, and visionaries dedicated to empowering
        users in the dynamic world of cryptocurrency.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-6">
        {TEAM.map((member) => (
          <div
            key={member.name}
            className="flex flex-col items-center text-center bg-gray-800  rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <div className="w-full relative aspect-square">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="rounded-full object-cover border-4 border-gray-300"
              />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-white">
              {member.name}
            </h3>
            <p className="text-sm text-gray-200">{member.role}</p>
            <div className="mt-4 flex space-x-3 text-gray-200">
              {member.bio}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
