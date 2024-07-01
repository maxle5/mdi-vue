
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileEyeOutline from "../../src/components/MdiFileEyeOutline.vue";

test("MdiFileEyeOutline snapshot", () => {
  const wrapper = mount(MdiFileEyeOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
