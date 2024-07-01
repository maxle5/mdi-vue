
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSocialDistance2Meters from "../../src/components/MdiSocialDistance2Meters.vue";

test("MdiSocialDistance2Meters snapshot", () => {
  const wrapper = mount(MdiSocialDistance2Meters, {});
  expect(wrapper.html()).toMatchSnapshot();
});
