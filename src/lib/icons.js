import {
  Car, Activity, Brain, Zap, HeartPulse, Network,
  Layers, Waves, Scan, ClipboardList, Microscope,
  Clock, FileText, TrendingUp, ArrowUpDown, Bone,
  Building2, Stethoscope, FileCheck, Wallet, Scale,
  ShieldCheck, Award, Star,
} from 'lucide-react'

const ICON_MAP = {
  // Conditions (services page)
  mva:        Car,
  back:       Activity,
  neck:       Brain,
  sciatica:   Zap,
  headache:   HeartPulse,
  radicular:  Network,
  // Treatments
  adjustment: Layers,
  shockwave:  Waves,
  // Diagnostics
  xray:       Scan,
  exam:       ClipboardList,
  mri:        Microscope,
  // Auto accident urgency
  delayed:    Clock,
  legal_doc:  FileText,
  early_care: TrendingUp,
  // Auto accident injuries
  whiplash:       ArrowUpDown,
  disc:           Layers,
  soft_tissue:    Activity,
  subluxation:    Bone,
  // Insurance
  medicare:           Building2,
  bcbs:               Stethoscope,
  insurance_major:    FileCheck,
  uninsured:          Wallet,
  hackensack:         Award,
  pi_cases:           Scale,
  // Patient forms
  form_intake:      ClipboardList,
  form_pi:          Scale,
  form_insurance:   ShieldCheck,
  form_financial:   FileText,
}

export default ICON_MAP
