import { Entity, Column, Index } from 'typeorm';
import { BaseEntity } from '../../entities/BaseEntity'; // ✅ đúng path

@Entity({ name: 'users' })
export class User extends BaseEntity {
    @Index({ unique: true }) @Column() email!: string;
    @Column({ name: 'password_hash', nullable: true }) passwordHash?: string;
    @Column({ nullable: true }) name?: string;
    @Column({ name: 'avatar_url', nullable: true }) avatarUrl?: string;
    @Column({ default: 'local' }) provider!: 'local' | 'google';
}
