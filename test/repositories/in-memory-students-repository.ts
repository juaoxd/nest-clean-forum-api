import { StudentsRepository } from '@/domain/forum/application/repositories/students-repository'
import { Student } from '@/domain/forum/enterprise/entities/student'

export class InMemoryStudentsRepository implements StudentsRepository {
  public items: Student[] = []

  async findByEmail(email: string): Promise<Student | null> {
    return this.items.find((item) => item.email === email) ?? null
  }

  async create(student: Student): Promise<void> {
    this.items.push(student)
  }
}
