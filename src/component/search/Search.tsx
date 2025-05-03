import {lazy, Suspense} from "react";
const Berlangganan = lazy(() => import("@/component/berlangganan/Item"));
import {CheckCircleIcon, XCircleIcon} from "@heroicons/react/24/solid";
import {useSuspenseQuery} from "@tanstack/react-query";
import {apis} from "@/api/axios";
type Users = {
    id: number;
    username: string;
    bio: string;
    profile_picture: boolean | number | string;
};
const Search = () => {
    const {data, isPending, isError} = useSuspenseQuery<Users[]>({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await apis.get("/user");
            return res.data;
        }
    });
    if (isPending) return <p>Memuat</p>;
    if (isError) return <p> terjadi kesalahan</p>;
    return (
        <div>
            <div className="bg-white p-4">
                <input
                    type="search"
                    placeholder="Cari: group atau pengguna"
                    className="w-full p-2.5 border outline-0 rounded-md"
                />

                <ul className="mt-6 flex justify-around mt-4 uppercase">
                    <li>pengguna</li>
                    <li>postingan</li>
                </ul>
            </div>
            {JSON.stringify(data)}
            <section className="bg-white p-4 mt-2">
                <h1 className="font-medium text-xl"> saran pengguna </h1>
                <ul className="mt-6">
                    {data.length
                        ? data.map(items => (
                              <li
                                  key={items.id}
                                  className="mb-6 flex items-start gap-2"
                              >
                                  <img
                                      src={`/src/images/${
                                          items.profile_picture == 0
                                              ? "default.jpg"
                                              : items.profile_picture
                                      }`}
                                      width={35}
                                      height={35}
                                      className="shrink-0 w-14 h-14 object-cover rounded-full"
                                  />

                                  <div className="flex-1 overflow-hidden">
                                      <h1 className="font-semibold truncate">
                                          @{items.username}
                                      </h1>
                                      <p className="text-sm text-gray-500">
                                          564 teman yang sama
                                      </p>
                                  </div>

                                  <div className="flex gap-5">
                                      <XCircleIcon className="size-7 text-red-500" />
                                      <CheckCircleIcon className="size-7 text-blue-500" />
                                  </div>
                              </li>
                          ))
                        : "tidak ada saran teman"}
                    <li className="p-2 mt-6 border-t">
                        <button className="w-full text-gray-600">
                            lebih banyak
                        </button>
                    </li>
                </ul>
            </section>

            <Suspense>
                <Berlangganan />
            </Suspense>
        </div>
    );
};

export default Search;
