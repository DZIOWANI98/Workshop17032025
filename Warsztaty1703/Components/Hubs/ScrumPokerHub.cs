// filepath: d:\repos\Workshop17032025\Warsztaty1703\Hubs\ScrumPokerHub.cs
using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

public class ScrumPokerHub : Hub
{
  public async Task CreateSession(string sessionName)
  {
    await Clients.All.SendAsync("SessionCreated", sessionName);
  }

  public async Task SelectCard(string card)
  {
    await Clients.All.SendAsync("CardSelected", card);
  }
}