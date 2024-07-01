
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWeatherHail from "../../src/components/MdiWeatherHail.vue";

test("MdiWeatherHail snapshot", () => {
  const wrapper = mount(MdiWeatherHail, {});
  expect(wrapper.html()).toMatchSnapshot();
});
