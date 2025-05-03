import ModalCenter from "@/component/common/ModalCenter";

import {CameraIcon, PhotoIcon, LinkIcon} from "@heroicons/react/24/outline";

const Status = () => {
    return (
        <ModalCenter>
            <div className="min-h-screen flex justify-center items-center">
                <form className="w-80 bg-white p-4 rounded-lg">
                    <div>
                        <select className="border outline-0 p-1 rounded-md bg-transparent">
                            <option>publik</option>
                            <option>pengikut</option>
                            <option>hanya saya</option>
                        </select>
                    </div>

                    <textarea
                        name="content"
                        rows={4}
                        className="mt-4 w-full border outline-0 p-2"
                        placeholder="Unggah status terbaikmu sekarang..."
                    ></textarea>
                    <input type="file" accept="image/*" />
                    <div className="mt-2.5 text-gray-600">
                        2 gambar dipilih
                        <label>
                            <input
                                type="url"
                                placeholder="masukan link video youtube"
                                className="text-sm w-full p-2 outline-0 border rounded-lg"
                                required
                            />
                        </label>
                    </div>

                    <div className="mt-2.5 flex text-sm text-gray-600 gap-2 justify-between">
                        <div className="flex gap-4">
                            <label>
                                <CameraIcon className="size-6" />
                            </label>
                            <label>
                                <PhotoIcon className="size-6" />
                            </label>
                            <label>
                                <LinkIcon className="size-6" />
                            </label>
                        </div>
                        <button className="px-4 py-2 bg-blue-500 text-sm text-white rounded-md">
                            unggah
                        </button>
                    </div>
                </form>
            </div>
        </ModalCenter>
    );
};

export default Status;
