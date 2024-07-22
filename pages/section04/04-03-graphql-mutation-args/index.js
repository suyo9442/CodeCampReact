import { useMutation, gql } from "@apollo/client"

const myGraphqlSetting = gql`
    mutation createBoard($writer: String, $title: String, $contents: String) {
        createBoard(writer: $writer, title: $title, contents: $contents) {
            _id
            number
            message
        }
    }   
`
export default function GraphqlMutationPage() {
    const [myGraphql] = useMutation(myGraphqlSetting);

    const onClickSubmit = async () => {
        const result = await myGraphql({
            $: { // = variables
                writer: "짱규",
                title: "못말령",
                contents: "짱규못말령"
            }
        });
        console.log(result)
    }

    return (
        <button onClick={onClickSubmit}>Graphql-API 요청하기</button>
    )
}