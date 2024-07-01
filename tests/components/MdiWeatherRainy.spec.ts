
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWeatherRainy from "../../src/components/MdiWeatherRainy.vue";

test("MdiWeatherRainy snapshot", () => {
  const wrapper = mount(MdiWeatherRainy, {});
  expect(wrapper.html()).toMatchSnapshot();
});
