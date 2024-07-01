
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWeatherWindy from "../../src/components/MdiWeatherWindy.vue";

test("MdiWeatherWindy snapshot", () => {
  const wrapper = mount(MdiWeatherWindy, {});
  expect(wrapper.html()).toMatchSnapshot();
});
