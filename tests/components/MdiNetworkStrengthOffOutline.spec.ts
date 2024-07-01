
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNetworkStrengthOffOutline from "../../src/components/MdiNetworkStrengthOffOutline.vue";

test("MdiNetworkStrengthOffOutline snapshot", () => {
  const wrapper = mount(MdiNetworkStrengthOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
