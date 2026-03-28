-- ============================================================
-- JP Franklin FX – Agentic AI Division
-- Supabase Schema
-- Run this in the Supabase SQL Editor
-- ============================================================

-- Enable UUID extension (already enabled by default in Supabase)
-- create extension if not exists "uuid-ossp";

-- ============================================================
-- LEADS TABLE
-- Stores audit form submissions
-- ============================================================
create table if not exists public.leads (
  id           uuid primary key default gen_random_uuid(),
  name         text not null,
  email        text not null,
  company      text not null,
  website      text,
  phone        text,
  revenue      text,
  challenge    text,
  source       text not null default 'audit-form',
  ip_address   text,
  user_agent   text,
  status       text not null default 'new',  -- new | contacted | qualified | closed | lost
  notes        text,
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);

-- Index for common queries
create index if not exists leads_email_idx on public.leads (email);
create index if not exists leads_status_idx on public.leads (status);
create index if not exists leads_created_at_idx on public.leads (created_at desc);

-- Auto-update updated_at
create or replace function public.handle_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger on_leads_update
  before update on public.leads
  for each row execute procedure public.handle_updated_at();

-- ============================================================
-- ROW LEVEL SECURITY
-- ============================================================
alter table public.leads enable row level security;

-- Service role can INSERT new leads (from Server Action)
create policy "service_role_can_insert_leads"
  on public.leads
  for insert
  to service_role
  with check (true);

-- Service role can SELECT all leads (for admin)
create policy "service_role_can_select_leads"
  on public.leads
  for select
  to service_role
  using (true);

-- Service role can UPDATE leads (for CRM workflow)
create policy "service_role_can_update_leads"
  on public.leads
  for update
  to service_role
  using (true);

-- Authenticated users (future admin portal) can read leads
create policy "authenticated_can_select_leads"
  on public.leads
  for select
  to authenticated
  using (true);

-- ============================================================
-- FUTURE: AUTH / CLIENT PORTAL PREP
-- (Uncomment when building the client portal)
-- ============================================================

-- Profiles table linked to auth.users
-- create table if not exists public.profiles (
--   id          uuid primary key references auth.users on delete cascade,
--   full_name   text,
--   company     text,
--   role        text default 'client',  -- client | admin
--   created_at  timestamptz default now()
-- );
--
-- alter table public.profiles enable row level security;
--
-- create policy "users_own_profile" on public.profiles
--   for all using (auth.uid() = id);

-- ============================================================
-- SAMPLE DATA (for testing — remove before production)
-- ============================================================
-- insert into public.leads (name, email, company, revenue, challenge) values
-- ('Test User', 'test@example.com', 'Test Co', '$1M–$5M', 'We need to automate our lead generation and follow-up process.');
