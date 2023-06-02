import { JsxElement } from "typescript"

type ChildrenProps = {
  children: JsxElement
}


interface ProductProps {
  nome: string,
  descricao: string,
  preco: string
  img: string,
}

interface RequestErrorProps{
  code: number,
  message: string
}

export type { ChildrenProps, ProductProps, RequestErrorProps }