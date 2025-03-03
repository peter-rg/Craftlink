import CartAddItem from "./add-to-cart"

export default async function CartAddItemPage(props: {
    params: Promise<{ itemId: string }>
  }) {
    const { itemId } = await props.params

    return <CartAddItem itemId={itemId} />
  }