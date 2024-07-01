
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWeatherFog from "../../src/components/MdiWeatherFog.vue";

test("MdiWeatherFog snapshot", () => {
  const wrapper = mount(MdiWeatherFog, {});
  expect(wrapper.html()).toMatchSnapshot();
});
