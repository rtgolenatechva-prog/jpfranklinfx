export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      leads: {
        Row: {
          id: string
          name: string
          email: string
          company: string
          website: string | null
          phone: string | null
          revenue: string | null
          challenge: string | null
          source: string
          ip_address: string | null
          user_agent: string | null
          status: string
          notes: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          company: string
          website?: string | null
          phone?: string | null
          revenue?: string | null
          challenge?: string | null
          source?: string
          ip_address?: string | null
          user_agent?: string | null
          status?: string
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          company?: string
          website?: string | null
          phone?: string | null
          revenue?: string | null
          challenge?: string | null
          source?: string
          ip_address?: string | null
          user_agent?: string | null
          status?: string
          notes?: string | null
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
