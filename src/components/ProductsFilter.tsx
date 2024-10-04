import { Radio, RadioGroup, Stack } from "@chakra-ui/react"

interface Props {
  setSortBy: (value: string) => void
  sortBy: string
}

const ProductsFilter = ({ setSortBy, sortBy }: Props) => {
  return (
    <div>
      {/* @ts-ignore */}
      <RadioGroup mb={4} onChange={setSortBy} value={sortBy}>
        <Stack direction='row'>
          <Radio value='asc'>Lower price</Radio>
          <Radio value='desc'>Higher price</Radio>
        </Stack>
      </RadioGroup>
    </div>
  )
}

export default ProductsFilter
