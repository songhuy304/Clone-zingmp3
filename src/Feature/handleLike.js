import Tippy from '@tippyjs/react';
import { toast } from 'react-toastify';
import { accountApi } from '~/Api';
import { Favourite } from '~/assets';
import { useAuth } from '~/context/AuthContext';
import { IoIosHeart } from "react-icons/io";
import React, { useCallback } from 'react';

// Tạo custom hook
const LikeMusic = React.memo(({ songId }) => {
    const { accessToken, favouriteMusic, setFavouriteMusic } = useAuth();
    const isFavourite = favouriteMusic?.includes(songId);

    const handleAddMusic = useCallback(async (songId) => {
        try {
            await accountApi.createSongFavoriteUser(accessToken, songId);
            setFavouriteMusic((prev) => [...prev, songId]); // Update favourite music list
            toast.info("Đã thêm vào thư viện yêu thích");
        } catch (error) {
            toast.error("Lỗi khi thêm vào thư viện yêu thích");
        }
    }, [accessToken, setFavouriteMusic]);

    const handleRemoveMusic = useCallback(async (songId) => {
        try {
            await accountApi.removeSongFavoriteUser(accessToken, songId);
            setFavouriteMusic((prev) => prev.filter((id) => id !== songId)); // Update favourite music list
            toast.info("Đã xóa khỏi thư viện yêu thích");
        } catch (error) {
            toast.error("Lỗi khi xóa khỏi thư viện yêu thích");
        }
    }, [accessToken, setFavouriteMusic]);

    const handleLike = useCallback((_id) => {
        if (!_id) {
            toast.info('Không tìm thấy bài hát');
            return;
        }
        if (accessToken) {
            if (favouriteMusic.includes(_id)) {
                handleRemoveMusic(_id);
            } else {
                handleAddMusic(_id);
            }
        } else {
            toast.info('Vui lòng đăng nhập để sử dụng chức năng này!');
        }
    }, [accessToken, favouriteMusic, handleAddMusic, handleRemoveMusic]);

    return (
        <Tippy content={isFavourite ? "Xóa khỏi thư viện" : "Thêm vào thư viện"}>
            <button
                onClick={() => handleLike(songId)}
                className={`${isFavourite ? "text-[#158370]" : "text-white"} rounded-full p-1 lg:p-3 hover:bg-[#273143]`}
            >
                {isFavourite ? <IoIosHeart /> : <Favourite />}
            </button>
        </Tippy>
    );
});

export default LikeMusic;
