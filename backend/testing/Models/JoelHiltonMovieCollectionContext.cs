using System;
using Microsoft.EntityFrameworkCore;

namespace testing.Models
{
    public partial class JoelHiltonMovieCollectionContext : DbContext
    {

        public JoelHiltonMovieCollectionContext(DbContextOptions<JoelHiltonMovieCollectionContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Movie> Movies { get; set; }
    }
}
