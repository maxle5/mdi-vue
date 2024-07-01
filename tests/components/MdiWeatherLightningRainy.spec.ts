
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWeatherLightningRainy from "../../src/components/MdiWeatherLightningRainy.vue";

test("MdiWeatherLightningRainy snapshot", () => {
  const wrapper = mount(MdiWeatherLightningRainy, {});
  expect(wrapper.html()).toMatchSnapshot();
});
