export const showType = (type, tit) => {
    if (tit === "overtime") {
      switch (type) {
        case 1:
          return "双休日加班";
        case 2:
          return "节假日加班";
        case 3:
          return "工作日加班";
        default:
          return "加班";
      }
    } else {
      switch (type) {
        case 1:
          return "年假";
        case 2:
          return "调休";
        default:
          return "休假";
      }
    }
  }
