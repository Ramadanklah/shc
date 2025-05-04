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
      contributions: {
        Row: {
          category: string
          created_at: string | null
          description: string
          id: string
          image_url: string | null
          location: string | null
          organisation_id: string | null
          quantity: number
          status: string | null
          title: string
        }
        Insert: {
          category: string
          created_at?: string | null
          description: string
          id?: string
          image_url?: string | null
          location?: string | null
          organisation_id?: string | null
          quantity: number
          status?: string | null
          title: string
        }
        Update: {
          category?: string
          created_at?: string | null
          description?: string
          id?: string
          image_url?: string | null
          location?: string | null
          organisation_id?: string | null
          quantity?: number
          status?: string | null
          title?: string
        }
        Relationships: []
      }
      donations: {
        Row: {
          amount: number
          case_id: string | null
          created_at: string | null
          donor_id: string | null
          id: string
          is_anonymous: boolean | null
          is_monthly: boolean | null
          payment_status: string | null
          transaction_id: string | null
        }
        Insert: {
          amount: number
          case_id?: string | null
          created_at?: string | null
          donor_id?: string | null
          id?: string
          is_anonymous?: boolean | null
          is_monthly?: boolean | null
          payment_status?: string | null
          transaction_id?: string | null
        }
        Update: {
          amount?: number
          case_id?: string | null
          created_at?: string | null
          donor_id?: string | null
          id?: string
          is_anonymous?: boolean | null
          is_monthly?: boolean | null
          payment_status?: string | null
          transaction_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "donations_case_id_fkey"
            columns: ["case_id"]
            isOneToOne: false
            referencedRelation: "medical_cases"
            referencedColumns: ["id"]
          },
        ]
      }
      medical_cases: {
        Row: {
          amount_raised: number | null
          created_at: string | null
          created_by: string | null
          description: string
          goal_amount: number
          id: string
          image_url: string | null
          patient: string
          status: string | null
          title: string
          urgency: string | null
        }
        Insert: {
          amount_raised?: number | null
          created_at?: string | null
          created_by?: string | null
          description: string
          goal_amount: number
          id?: string
          image_url?: string | null
          patient: string
          status?: string | null
          title: string
          urgency?: string | null
        }
        Update: {
          amount_raised?: number | null
          created_at?: string | null
          created_by?: string | null
          description?: string
          goal_amount?: number
          id?: string
          image_url?: string | null
          patient?: string
          status?: string | null
          title?: string
          urgency?: string | null
        }
        Relationships: []
      }
      need_contribution_matches: {
        Row: {
          contribution_id: string | null
          created_at: string | null
          id: string
          need_id: string | null
          notes: string | null
          quantity: number
          status: string | null
        }
        Insert: {
          contribution_id?: string | null
          created_at?: string | null
          id?: string
          need_id?: string | null
          notes?: string | null
          quantity: number
          status?: string | null
        }
        Update: {
          contribution_id?: string | null
          created_at?: string | null
          id?: string
          need_id?: string | null
          notes?: string | null
          quantity?: number
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "need_contribution_matches_contribution_id_fkey"
            columns: ["contribution_id"]
            isOneToOne: false
            referencedRelation: "contributions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "need_contribution_matches_need_id_fkey"
            columns: ["need_id"]
            isOneToOne: false
            referencedRelation: "needs"
            referencedColumns: ["id"]
          },
        ]
      }
      needs: {
        Row: {
          category: string
          created_at: string | null
          description: string
          id: string
          location: string | null
          organisation_id: string | null
          quantity: number
          status: string | null
          title: string
        }
        Insert: {
          category: string
          created_at?: string | null
          description: string
          id?: string
          location?: string | null
          organisation_id?: string | null
          quantity: number
          status?: string | null
          title: string
        }
        Update: {
          category?: string
          created_at?: string | null
          description?: string
          id?: string
          location?: string | null
          organisation_id?: string | null
          quantity?: number
          status?: string | null
          title?: string
        }
        Relationships: []
      }
      organisations: {
        Row: {
          contact_email: string
          contact_person: string
          created_at: string | null
          description: string | null
          id: string
          is_verified: boolean | null
          license: string | null
          location: string
          logo_url: string | null
          name: string
          whatsapp: string | null
        }
        Insert: {
          contact_email: string
          contact_person: string
          created_at?: string | null
          description?: string | null
          id: string
          is_verified?: boolean | null
          license?: string | null
          location: string
          logo_url?: string | null
          name: string
          whatsapp?: string | null
        }
        Update: {
          contact_email?: string
          contact_person?: string
          created_at?: string | null
          description?: string | null
          id?: string
          is_verified?: boolean | null
          license?: string | null
          location?: string
          logo_url?: string | null
          name?: string
          whatsapp?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          full_name: string | null
          id: string
          is_verified: boolean | null
          role: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          full_name?: string | null
          id: string
          is_verified?: boolean | null
          role?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          full_name?: string | null
          id?: string
          is_verified?: boolean | null
          role?: string | null
        }
        Relationships: []
      }
      testimonials: {
        Row: {
          created_at: string | null
          id: string
          image_url: string | null
          is_featured: boolean | null
          name: string
          quote: string
          role: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          image_url?: string | null
          is_featured?: boolean | null
          name: string
          quote: string
          role: string
        }
        Update: {
          created_at?: string | null
          id?: string
          image_url?: string | null
          is_featured?: boolean | null
          name?: string
          quote?: string
          role?: string
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

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
