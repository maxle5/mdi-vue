
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWeatherSnowyHeavy from "../../src/components/MdiWeatherSnowyHeavy.vue";

test("MdiWeatherSnowyHeavy snapshot", () => {
  const wrapper = mount(MdiWeatherSnowyHeavy, {});
  expect(wrapper.html()).toMatchSnapshot();
});
