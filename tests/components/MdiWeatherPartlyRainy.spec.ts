
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWeatherPartlyRainy from "../../src/components/MdiWeatherPartlyRainy.vue";

test("MdiWeatherPartlyRainy snapshot", () => {
  const wrapper = mount(MdiWeatherPartlyRainy, {});
  expect(wrapper.html()).toMatchSnapshot();
});
