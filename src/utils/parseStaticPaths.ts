import { StaticPaths } from "@/types/index"

export default (ids: Array<{ id: string | number }>): StaticPaths => (
    ids?.map((p: any) => p?.id?.toString())
        .filter((id: any) => id !== null && id != undefined)
        .map((id: any) => ({
            params: { id }
        }))
)
