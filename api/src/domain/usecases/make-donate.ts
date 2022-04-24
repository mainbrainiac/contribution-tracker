export interface MakeDonate {
  donate(donateParams: MakeDonate.params): Promise<MakeDonate.result>
}

export namespace MakeDonate {
  export type params = {
    contributorId: string
    charityId: string
    amount: number
  }

  export type result = boolean
}