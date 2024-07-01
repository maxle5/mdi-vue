
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNetworkStrengthOutline from "../../src/components/MdiNetworkStrengthOutline.vue";

test("MdiNetworkStrengthOutline snapshot", () => {
  const wrapper = mount(MdiNetworkStrengthOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
