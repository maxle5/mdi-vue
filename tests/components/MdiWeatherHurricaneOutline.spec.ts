
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWeatherHurricaneOutline from "../../src/components/MdiWeatherHurricaneOutline.vue";

test("MdiWeatherHurricaneOutline snapshot", () => {
  const wrapper = mount(MdiWeatherHurricaneOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
