create table if not exists public.contact_submissions (
  id bigserial primary key,
  form_type text not null,
  lang text not null default 'en',
  full_name text not null,
  email text not null,
  company text,
  reason text,
  message text,
  submitted_at timestamptz not null default now()
);

alter table public.contact_submissions enable row level security;

create policy "Allow authenticated inserts"
on public.contact_submissions
for insert
to authenticated
with check (true);

create policy "Allow anon inserts"
on public.contact_submissions
for insert
to anon
with check (true);
