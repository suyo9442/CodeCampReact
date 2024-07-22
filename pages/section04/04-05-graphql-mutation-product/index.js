import { useMutation, gql } from "@apollo/client"
import { useState } from "react";

const CREATE_PRODUCT = gql`
    mutation createProduct($seller: String, $createProductInput: CreateProductInput!) { # 파라미터 타입
        createProduct(seller: $seller, createProductInput: $createProductInput) {      # 파라미터
            _id
            number
            message
        }
    }   
`;
export default function GraphqlMutationPage() {
    const [createProduct] = useMutation(CREATE_PRODUCT);

    const [values, setValues] = useState({
        writer: '',
        name: '',
        detail: '',
        price: 0,
    });
    const onChangeInput = (name, e) => {
        setValues({
            ...values,
            [name]: e.target.value
        })
    };
    const onClickSubmit = async () => {
        const result = await createProduct({
            variables: {
                seller: values.writer,
                createProductInput: {
                    name: values.name,
                    detail: values.detail,
                    price: +values.price
                }
            }
        });
        console.log(result);
    };

    return (
        <div>
            판매자: <input type='text' onChange={(e) => onChangeInput('writer', e)} /> <br />
            상품: <input type='text' onChange={(e) => onChangeInput('name', e)} /> <br />
            설명: <input type='text' onChange={(e) => onChangeInput('detail', e)} /> <br />
            가격: <input type='text' onChange={(e) => onChangeInput('price', e)} /> <br />
            <button onClick={onClickSubmit}>Graphql-API 요청하기</button>
        </div>
    )
};