const ProductFilters = () => {
    return (
        <section className="flex justify-center items-center py-8">
            <input type="radio" name="filter-selection" className="hidden" id="filter-0" />
            <label className="rounded-s-lg bg-slate-950 hover:bg-slate-800 p-2 text-sm text-slate-100 cursor-pointer" htmlFor="filter-0">Todos</label>
            <input type="radio" name="filter-selection" className="hidden" id="filter-1" />
            <label className="bg-slate-950 hover:bg-slate-800 p-2 text-sm text-slate-100 cursor-pointer" htmlFor="filter-1">Brasileiro</label>
            <input type="radio" name="filter-selection" className="hidden" id="filte-2" />
            <label className="rounded-s-lg bg-slate-950 hover:bg-slate-800 p-2 text-sm text-slate-100 cursor-pointer" dir="rtl" htmlFor="filter-2">Europeu</label>
        </section>
    )
}

export default ProductFilters;