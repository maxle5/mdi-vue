
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWeatherSnowyRainy from "../../src/components/MdiWeatherSnowyRainy.vue";

test("MdiWeatherSnowyRainy snapshot", () => {
  const wrapper = mount(MdiWeatherSnowyRainy, {});
  expect(wrapper.html()).toMatchSnapshot();
});
