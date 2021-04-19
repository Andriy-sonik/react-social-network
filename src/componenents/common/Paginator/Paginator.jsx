import s from "./Paginator.module.css";

let Paginator = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div className={s.paginations}>
      {pages.map((p) => {
        return (
          <button
            className={props.currentPage === p ? s.selectedPage : null}
            key={p}
            onClick={() => {
              props.onPageChanged(p);
            }}
          >
            {p}
          </button>
        );
      })}
    </div>
  );
};
export default Paginator;
