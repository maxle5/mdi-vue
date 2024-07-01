
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEyeRemoveOutline from "../../src/components/MdiEyeRemoveOutline.vue";

test("MdiEyeRemoveOutline snapshot", () => {
  const wrapper = mount(MdiEyeRemoveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
