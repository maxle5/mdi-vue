
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCarLightHigh from "../../src/components/MdiCarLightHigh.vue";

test("MdiCarLightHigh snapshot", () => {
  const wrapper = mount(MdiCarLightHigh, {});
  expect(wrapper.html()).toMatchSnapshot();
});
