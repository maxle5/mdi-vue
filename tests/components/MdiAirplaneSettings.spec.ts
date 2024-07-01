
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAirplaneSettings from "../../src/components/MdiAirplaneSettings.vue";

test("MdiAirplaneSettings snapshot", () => {
  const wrapper = mount(MdiAirplaneSettings, {});
  expect(wrapper.html()).toMatchSnapshot();
});
