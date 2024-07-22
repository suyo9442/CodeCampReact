import { useMutation, gql } from "@apollo/client"
import { useState } from "react";
import { useRouter } from 'next/router';

const myGraphqlSetting = gql`
    mutation createBoard($writer: String, $title: String, $contents: String) {
        createBoard(writer: $writer, title: $title, contents: $contents) {
            _id
            number
            message
        }
    }   
`;
export default function DynamicRoutingBoardMutationPage() {
    const [myGraphql] = useMutation(myGraphqlSetting);
    const router = useRouter();

    const [values, setValues] = useState({
        writer: '',
        title: '',
        contents: ''
    });
    const onChangeInput = (name, e) => {
        setValues({
            ...values,
            [name]: e.target.value
        })
    };
    const onClickSubmit = async () => {
        try {
            const result = await myGraphql({ variables: values });
            console.log(result);

            const { number } = result?.data?.createBoard;
            if (number) {
                alert(`게시글이 등록! ${number}번 게시글로 이동!`)
                router.push(`/section05/05-05-dynamic-routing-board-mutation-moved/${number}`)
            }
        } catch (err) {
            alert(err?.message)
        }
    };

    return (
        <div>
            작성자: <input type='text' onChange={(e) => onChangeInput('writer', e)} /> <br />
            제목: <input type='text' onChange={(e) => onChangeInput('title', e)} /> <br />
            내용: <input type='text' onChange={(e) => onChangeInput('contents', e)} /> <br />
            <button onClick={onClickSubmit}>게시글 등록</button>
        </div>
    )
};