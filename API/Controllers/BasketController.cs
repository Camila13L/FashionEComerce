using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authentication.Cookies;
namespace API.Controllers
{
    public class BasketController
    {
        private readonly StoreContext _context;
        public BasketController(StoreContext context)
        {
            _context = context;
        }

       [HttpGet]
       public async Task<ActionResult<Basket>> GetBasket()
       {
        var baskets = await _context.Baskets
            .FirstOrDefaultAsync(x => x.BuyerId == Request.Cookies["buyerId"]);
       }
    }
}