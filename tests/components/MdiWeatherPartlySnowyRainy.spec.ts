
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWeatherPartlySnowyRainy from "../../src/components/MdiWeatherPartlySnowyRainy.vue";

test("MdiWeatherPartlySnowyRainy snapshot", () => {
  const wrapper = mount(MdiWeatherPartlySnowyRainy, {});
  expect(wrapper.html()).toMatchSnapshot();
});
