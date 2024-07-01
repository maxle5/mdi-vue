
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWeatherHazy from "../../src/components/MdiWeatherHazy.vue";

test("MdiWeatherHazy snapshot", () => {
  const wrapper = mount(MdiWeatherHazy, {});
  expect(wrapper.html()).toMatchSnapshot();
});
