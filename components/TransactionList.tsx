"use client";

import { Card } from "@/components/ui/card";
import { ArrowDownCircle, ArrowUpCircle } from "lucide-react";

const transactions = [
  { id: 1, description: "Salary", amount: 2000, type: "income", date: "2024-03-20" },
  { id: 2, description: "Rent", amount: 800, type: "expense", date: "2024-03-19" },
  { id: 3, description: "Groceries", amount: 150, type: "expense", date: "2024-03-18" },
];

export default function TransactionList() {
  return (
    <Card className="bg-zinc-800/50 border-zinc-700 p-6">
      <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between p-4 rounded-lg bg-zinc-900 border border-zinc-700"
          >
            <div className="flex items-center gap-3">
              {transaction.type === "income" ? (
                <ArrowUpCircle className="h-5 w-5 text-emerald-500" />
              ) : (
                <ArrowDownCircle className="h-5 w-5 text-rose-500" />
              )}
              <div>
                <p className="font-medium">{transaction.description}</p>
                <p className="text-sm text-zinc-400">{transaction.date}</p>
              </div>
            </div>
            <p className={`font-semibold ${
              transaction.type === "income" ? "text-emerald-400" : "text-rose-400"
            }`}>
              {transaction.type === "income" ? "+" : "-"}${transaction.amount}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
}