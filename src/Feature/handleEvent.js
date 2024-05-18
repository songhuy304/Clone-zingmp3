import { ALL_NATIONAL, BUTTON_RENDER_SELECT_NATIONAL, KPOP_NATIONAL, LOBAl, USUK_NATIONAL, VPOP_NATIONAL } from "~/contanst";

export const handleFilterSongTrending = (data = [], paramsFilter) => {
    const dataFilter = data.filter((item) => {
        const category = item.slug_category;
        switch (paramsFilter) {
            case USUK_NATIONAL:
                return category === 'edm' || category === 'pop-au-my';
            case VPOP_NATIONAL:
                return category === 'nhac-tre';
            case KPOP_NATIONAL:
                return category === 'nhac-han';
            case LOBAl:
                return (
                    category === 'edm' ||
                    category === 'nhac-han' ||
                    category === 'pop-au-my'
                );
            case ALL_NATIONAL:
                return category;
            default:
                throw Error('error');
        }
    });
    return dataFilter;
};

export const RenderButtonSelect = (
  paramsFilter,
  onHandleSelectNational,
  isTrendingPage // check page Trending will havent LOBAL
) => {
  // render button select national
  const result = BUTTON_RENDER_SELECT_NATIONAL.map((item, index) => {
    // clean code
    const isLocal = item.type === LOBAl;
    const isKPopOrUSUK =
      item.type === KPOP_NATIONAL || item.type === USUK_NATIONAL;
    const shouldRender = isTrendingPage ? !isLocal : !isKPopOrUSUK;

    if (shouldRender) {
      return (
        <button
          key={index}
          className={`${
            item.type === paramsFilter ? "bg-[#158370] border-[#158370]" : ""
          } uppercase px-6 py-1 border rounded-full hover:bg-[#158370] max-w-full hover:border-[#158370]`}
          onClick={() => onHandleSelectNational(item)}
        >
          {item.title}
        </button>
      );
    }

    return null;
  });
  return result;
};