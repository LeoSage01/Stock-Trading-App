import { AutoComplete } from "../components/AutoComplete"
import { StockList } from "../components/StockList"

export const StockOverviewPage = () => {
  return <div>
    <div className="text-center">
       <img style={{
        height: "120px"
      }} src="https://i.pinimg.com/564x/bc/3a/f6/bc3af6a60507e30bc69ce7272f63b22e.jpg" alt="" />
    </div>
    <AutoComplete />
    <StockList />
  </div>
}
