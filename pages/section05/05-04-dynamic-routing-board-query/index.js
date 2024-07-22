import { useRouter } from 'next/router';
import { gql, useQuery } from '@apollo/client'

const FETCH_BOARD = gql`
    query {
        fetchBoard(number: 24555) {
            number
            writer
            title
            contents
        }
    }
`

export default function DynamicRoutingBoardMutationPage() {
    const { loading, error, data } = useQuery(FETCH_BOARD, {
        variables: { number: 24555 }
    });

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h1>게시글 정보</h1>
            <p>번호: {data.fetchBoard.number}</p>
            <p>작성자: {data.fetchBoard.writer}</p>
            <p>제목: {data.fetchBoard.title}</p>
            <p>내용: {data.fetchBoard.contents}</p>
        </div>
    );
}