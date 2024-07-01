
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNetworkStrengthOff from "../../src/components/MdiNetworkStrengthOff.vue";

test("MdiNetworkStrengthOff snapshot", () => {
  const wrapper = mount(MdiNetworkStrengthOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
