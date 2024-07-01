
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWeatherMoonset from "../../src/components/MdiWeatherMoonset.vue";

test("MdiWeatherMoonset snapshot", () => {
  const wrapper = mount(MdiWeatherMoonset, {});
  expect(wrapper.html()).toMatchSnapshot();
});
