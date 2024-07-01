
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStringLightsOff from "../../src/components/MdiStringLightsOff.vue";

test("MdiStringLightsOff snapshot", () => {
  const wrapper = mount(MdiStringLightsOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
