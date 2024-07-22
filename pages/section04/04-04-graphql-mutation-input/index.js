import { useMutation, gql } from "@apollo/client"
import { useState } from "react";

const myGraphqlSetting = gql`
    mutation createBoard($writer: String, $title: String, $contents: String) {
        createBoard(writer: $writer, title: $title, contents: $contents) {
            _id
            number
            message
        }
    }   
`;
export default function GraphqlMutationPage() {
    const [myGraphql] = useMutation(myGraphqlSetting);

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
        const result = await myGraphql({ variables: values });
        console.log(result);
    };

    return (
        <div>
            작성자: <input type='text' onChange={(e) => onChangeInput('writer', e)} /> <br />
            제목: <input type='text' onChange={(e) => onChangeInput('title', e)} /> <br />
            내용: <input type='text' onChange={(e) => onChangeInput('contents', e)} /> <br />
            <button onClick={onClickSubmit}>Graphql-API 요청하기</button>
        </div>
    )
};