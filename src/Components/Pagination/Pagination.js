/* eslint-disable react-hooks/exhaustive-deps */
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { createRef, useEffect, useRef, useState } from "react";
import style from "./Pagination.module.css";

const Pagination = (props) => {
    const [pagesNumberArray, setPagesNumberArray] = useState([1, 2, 3]);
    const pagesRef = useRef(pagesNumberArray.map(() => createRef()));

    function Page() {
        return pagesNumberArray.map((i, index) => {
            if (i) {
                return (
                    <button
                        key={i}
                        id={"page-" + i}
                        onClick={PageClick}
                        ref={pagesRef.current[index]}
                        className={
                            style.page +
                            " " +
                            (i === props.currentPage ? style.active : "")
                        }
                    >
                        {i}
                    </button>
                );
            }
            return <></>;
        });
    }

    useEffect(() => {
        console.log(props.totalPage);
        let pages = [];
        for (let i = 0; i < props.totalPage; i++) {
            if (i > 2) break;
            pages.push(i + 1);
        }
        setPagesNumberArray(pages);
    }, [props.totalPage]);

    function PageClick(e) {
        let id = parseInt(e.target.id.split("-")[1]);
        changePage(id);
    }

    function changePage(index) {
        let currentPage = props.currentPage % 3;
        if (currentPage === 0) currentPage += 3;
        if (index === props.currentPage) return;
        pagesRef.current[currentPage - 1].current.classList.remove("active");
        pagesRef.current[currentPage - 1].current.classList.add("active");
        props.setCurrentPage(index);
    }

    function nextPage() {
        let nextPage = props.currentPage + 1;
        if (nextPage > pagesNumberArray[2]) return nextSlide();
        changePage(props.currentPage + 1);
    }

    function backPage() {
        let backPage = props.currentPage - 1;
        if (backPage < pagesNumberArray[0]) return backSlide(1);
        changePage(props.currentPage - 1);
    }

    function nextSlide() {
        props.setCurrentPage(pagesNumberArray[0] + 3);
        setPagesNumberArray(
            pagesNumberArray.map((value) => {
                if (value + 3 <= props.totalPage) {
                    return value + 3;
                }
                return 0;
            })
        );
    }

    function backSlide(currentPageReduction) {
        props.setCurrentPage(pagesNumberArray[0] - currentPageReduction);
        setPagesNumberArray(
            pagesNumberArray.map((value, index) => {
                if (value === 0) value = pagesNumberArray[0] + index;
                return value - 3;
            })
        );
    }

    return (
        <div className={style.pagination}>
            {props.currentPage > 3 ? (
                <>
                    <button className={style.page} onClick={backPage}>
                        <BiChevronLeft color="#404040" />
                    </button>
                    <button className={style.page} onClick={() => backSlide(3)}>
                        ...
                    </button>
                </>
            ) : (
                <></>
            )}
            <Page />
            {pagesNumberArray[0] + 3 <= props.totalPage ? (
                <>
                    <button className={style.page} onClick={nextSlide}>
                        ...
                    </button>
                    <button className={style.page} onClick={nextPage}>
                        <BiChevronRight color="#404040" />
                    </button>
                </>
            ) : (
                <></>
            )}
        </div>
    );
};

export default Pagination;
