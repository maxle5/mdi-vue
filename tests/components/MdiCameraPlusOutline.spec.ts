
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCameraPlusOutline from "../../src/components/MdiCameraPlusOutline.vue";

test("MdiCameraPlusOutline snapshot", () => {
  const wrapper = mount(MdiCameraPlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
