import { useMutation, gql } from "@apollo/client"

const myGraphqlSetting = gql`
    mutation {
        createBoard(writer: "에피", title: "쿨쿨", contents: "에피 낮잠자는 중") {
            _id
            number
            message
        }
    }   
`
export default function GraphqlMutationPage() {
    const [myGraphql] = useMutation(myGraphqlSetting);

    const onClickSubmit = async () => {
        const result = await myGraphql();
        console.log(result)
    }

    return (
        <button onClick={onClickSubmit}>Graphql-API 요청하기</button>
    )
}