
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWeatherHurricane from "../../src/components/MdiWeatherHurricane.vue";

test("MdiWeatherHurricane snapshot", () => {
  const wrapper = mount(MdiWeatherHurricane, {});
  expect(wrapper.html()).toMatchSnapshot();
});
