using FluentMigrator;

namespace TransportManagementSystem.Migrations;

[Migration(202610261719)]
public class Table_Customer : Migration
{
    public override void Down()
    {
        Delete.Table("Customer");
    }

    public override void Up()
    {
        Create.Table("Customer")
        .WithColumn("id").AsInt32().PrimaryKey().Identity()
        .WithColumn("abbreviation").AsString().NotNullable()
        .WithColumn("account_no").AsInt32().NotNullable()
        .WithColumn("address").AsInt32().NotNullable()
        .WithColumn("city").AsDateTime().Nullable()
        .WithColumn("code").AsDateTime().Nullable()
        .WithColumn("contact_department").AsInt32().NotNullable()
        .WithColumn("contact_email").AsDateTime().Nullable()
        .WithColumn("contact_first_name").AsDateTime().Nullable()
        .WithColumn("contact_last_name").AsInt32().NotNullable()
        .WithColumn("contact_phone").AsDateTime().Nullable()
        .WithColumn("country_id").AsDateTime().Nullable()
        .WithColumn("created").AsInt32().NotNullable()
        .WithColumn("created_by").AsDateTime().Nullable()
        .WithColumn("credit_limit").AsDateTime().Nullable()
        .WithColumn("has_spesific_period").AsInt32().NotNullable()
        .WithColumn("is_deleted").AsDateTime().Nullable()
        .WithColumn("modified").AsDateTime().Nullable()
        .WithColumn("modified_by").AsInt32().NotNullable()
        .WithColumn("name").AsDateTime().Nullable()
        .WithColumn("sales_person").AsDateTime().Nullable()
        .WithColumn("state").AsInt32().NotNullable()
        .WithColumn("tax_register_no").AsDateTime().Nullable()
        .WithColumn("term_payment").AsDateTime().Nullable()
        .WithColumn("zip_code").AsInt32().NotNullable();
    }
}
