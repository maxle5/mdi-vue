
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEyeOutline from "../../src/components/MdiEyeOutline.vue";

test("MdiEyeOutline snapshot", () => {
  const wrapper = mount(MdiEyeOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
