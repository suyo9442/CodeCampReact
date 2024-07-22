import { useRouter } from 'next/router';
import { gql, useQuery } from '@apollo/client'

const FETCH_BOARD = gql`
    query fetchBoard($number: Int){
        fetchBoard(number: $number) {
            number
            writer
            title
            contents
        }
    }
`;

export default function DynamicRoutingBoardMutationMovedPage() {
    const router = useRouter();
    const { data } = useQuery(FETCH_BOARD, {
        variables: { number: Number(router.query.number) }
    });

    return (
        <div>
            <h1>{router.query.number}번 게시글 정보</h1>
            <p>번호: {data?.fetchBoard?.number}</p>
            <p>작성자: {data?.fetchBoard?.writer}</p>
            <p>제목: {data?.fetchBoard?.title}</p>
            <p>내용: {data?.fetchBoard?.contents}</p>
        </div>
    );
}