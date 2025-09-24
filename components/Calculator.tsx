"use client"
import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Minus, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import axios from "axios";

interface Service {
    id: string
    title: string
    icon: string
    pricePerUnit: number
}

const services: Service[] = [
    { id: "window1", title: "незер-сет", icon: "netherite_set.png", pricePerUnit: 1500 },

]

const Calculator = () => {
    const [quantities, setQuantities] = useState<Record<string, number>>(
        Object.fromEntries(services.map((service) => [service.id, 0]))
    )
    const [formData, setFormData] = useState({ name: "", phone: "" })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [lastOrderTime, setLastOrderTime] = useState<number | null>(null)
    const [message, setMessage] = useState<string | null>(null)

    const totalPrice = Object.entries(quantities).reduce((total, [serviceId, quantity]) => {
        const service = services.find((s) => s.id === serviceId)
        return total + (service?.pricePerUnit || 0) * quantity
    }, 0)

    const handleQuantityChange = (serviceId: string, delta: number) => {
        setQuantities((prev) => ({
            ...prev,
            [serviceId]: Math.max(0, (prev[serviceId] || 0) + delta),
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        // Перевірка, чи вибраний хоча б один сет
        const selectedServices = Object.entries(quantities).filter(([_, quantity]) => quantity > 0)
        if (selectedServices.length === 0) {
            setMessage("⚠ Будь ласка, виберіть хоча б один сет.")
            return
        }

        // Перевірка часу останнього замовлення
        const now = Date.now()
        if (lastOrderTime && now - lastOrderTime < 60_000) {
            setMessage("⏳ Можна відправляти лише одне замовлення на хвилину.")
            return
        }

        setIsSubmitting(true)
        setMessage(null)

        try {
            const token = "7564075153:AAEW7t3vMULp5_1Pn15RoIHVWTlmVJeH7uQ"
            await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
                chat_id: "5131206041",
                parse_mode: "html",
                text: `
          Замовлення!!!
          Нік: ${formData.name} 
          Сума: ${totalPrice}
          Сет: ${selectedServices
                    .map(([serviceId, quantity]) => {
                        const service = services.find((s) => s.id === serviceId)?.title
                        return `${service} - ${quantity}`
                    })
                    .join("; ")}
        `
            })

            setLastOrderTime(now)
            setMessage("✅ Замовлення успішно надіслане!")
            setQuantities(Object.fromEntries(services.map(s => [s.id, 0])))
            setFormData({ name: "", phone: "" })

        } catch (error) {
            setMessage("❌ Помилка при відправці замовлення.")
        }

        setIsSubmitting(false)
    }

    return (
        <section className="" id="прайс-лист">
            <div className="container mx-auto ">
                <motion.div
                    initial={{ opacity: 1, y: 1 }}
                    whileInView={{ opacity: 20, y: 10 }}
                    viewport={{ once: true }}
                    className="grid lg:grid-cols-3 gap-4 justify-center"
                >
                    {/* Services Grid */}
                    <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-2 ">
                        {services.map((service) => (
                            <Card key={service.id} className="bg-[url('/wood.png')] bg-[length:200px_200px] text-white border-black">
                                <CardContent className="p-3 md:p-4">
                                    <div className="flex flex-col items-center text-center gap-2">
                                        <img src={service.icon || "/placeholder.svg"} alt="" className="w-120 h-120 md:w-160 md:h-160 mb-2" />
                                        <p className="text-lg md:text-sm font-medium">{service.title}</p>
                                        <div>
                                            <div className="font-bold">
                                                {service.pricePerUnit} ар.
                                            </div>
                                            <div className="flex items-center gap-4 md:gap-5 mt-2">
                                                <Button
                                                    variant="outline"
                                                    size="icon"
                                                    className="h-8 w-8"
                                                    onClick={() => handleQuantityChange(service.id, -1)}
                                                    disabled={quantities[service.id] === 0}
                                                    aria-label="decrement"
                                                >
                                                    <Minus className="h-3 w-3 md:h-4 md:w-4 text-black" />
                                                </Button>
                                                <span className="w-6 md:w-8 text-center">{quantities[service.id]}</span>
                                                <Button
                                                    variant="outline"
                                                    size="icon"
                                                    className="h-8 w-8"
                                                    onClick={() => handleQuantityChange(service.id, 1)}
                                                    aria-label="increment"
                                                >
                                                    <Plus className="h-3 w-3 md:h-4 md:w-4 text-black" />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Calculator Form */}
                    <div className="md:pl-[-300px]">
                        <div className="lg:1 lg:top 1 h-fit">
                            <Card className="bg-[url('/wood.png')] bg-[length:200px_200px]   border-black">
                                <CardContent className="p-1 md:p-1">
                                    <p className="text-3xl md:text-4xl font-bold text-center text-gray-200 mb-6 md:mb-8">
                                        {totalPrice} ар.
                                    </p>
                                    <form onSubmit={handleSubmit} className="space-y-5">

                                        <div>
                                            <label className="block text-sm font-medium mb-1 text-gray-200" htmlFor="name">Ваш нік:</label>
                                            <Input
                                                id="name"
                                                required
                                                value={formData.name}
                                                onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                                            />
                                        </div>
                                        <Button
                                            type="submit"
                                            className="w-full bg-blue-800 hover:bg-blue-600 text-white py-2 md:py-3 text-sm md:text-base"
                                            disabled={isSubmitting}
                                            aria-label="submit"
                                        >
                                            {isSubmitting ? "відправка..." : "замовити"}
                                        </Button>
                                        {message && (
                                            <p className="text-xs md:text-sm text-center text-white mt-2">
                                                {message}
                                            </p>
                                        )}
                                    </form>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Calculator