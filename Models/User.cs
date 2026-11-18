using System.ComponentModel.DataAnnotations;

namespace CampusLoop.Models;

public class User
{
    public string Id { get; set; } = "";

    [Required]
    [Display(Name = "Full name")]
    public string FullName { get; set; } = "";

    [Required]
    [EmailAddress]
    public string Email { get; set; } = "";

    [Required]
    [DataType(DataType.Password)]
    public string Password { get; set; } = "";

    [Required]
    public string Role { get; set; } = "";
}