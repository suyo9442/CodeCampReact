import { gql, useQuery } from "@apollo/client"
import { useRouter } from "next/router"

const FETCH_BOARD = gql`
    query fetchBoard($boardId: ID!) {
        fetchBoard(boardId: $boardId) {
            _id
            writer
            title
            contents
        }
    }

`;

export default function BoardDetailPage() {
    const router = useRouter();
    const { data } = useQuery(FETCH_BOARD, {
        variables: {
            boardId: router.query.boardId
        }
    });

    return (
        <div>
            <p>{data?.fetchBoard?._id}번 게시글</p>
            <p>작성자: {data?.fetchBoard?.title}</p>
            <p>제목: {data?.fetchBoard?.writer}</p>
            <p>내용: {data?.fetchBoard?.contents}</p>
        </div>
    )
};