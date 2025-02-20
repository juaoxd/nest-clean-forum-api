import { UseCaseError } from '@/core/errors/use-case-error'

export class StudentAlreadyExistsError extends Error implements UseCaseError {
  constructor(identifiter: string) {
    super(`Student "${identifiter}" address already exists.`)
  }
}
