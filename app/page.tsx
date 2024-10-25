import { DollarSign, TrendingUp, TrendingDown, PiggyBank } from "lucide-react";
import { Card } from "@/components/ui/card";
import TransactionForm from "@/components/TransactionForm";
import TransactionList from "@/components/TransactionList";
import Overview from "@/components/Overview";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 to-zinc-950 text-white">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <DollarSign className="h-8 w-8 text-emerald-400" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Dime Drip
            </h1>
          </div>
          <p className="text-zinc-400">Track your money flow with style</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-zinc-800/50 border-zinc-700 p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-emerald-500/10 rounded-full">
                <TrendingUp className="h-6 w-6 text-emerald-500" />
              </div>
              <div>
                <p className="text-sm text-zinc-400">Total Income</p>
                <p className="text-2xl font-bold text-emerald-400">$2,450.00</p>
              </div>
            </div>
          </Card>

          <Card className="bg-zinc-800/50 border-zinc-700 p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-rose-500/10 rounded-full">
                <TrendingDown className="h-6 w-6 text-rose-500" />
              </div>
              <div>
                <p className="text-sm text-zinc-400">Total Expenses</p>
                <p className="text-2xl font-bold text-rose-400">$1,280.00</p>
              </div>
            </div>
          </Card>

          <Card className="bg-zinc-800/50 border-zinc-700 p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-500/10 rounded-full">
                <PiggyBank className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <p className="text-sm text-zinc-400">Net Balance</p>
                <p className="text-2xl font-bold text-blue-400">$1,170.00</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <TransactionForm />
            <TransactionList />
          </div>
          <Overview />
        </div>
      </div>
    </main>
  );
}