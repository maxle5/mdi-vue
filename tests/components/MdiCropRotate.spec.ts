
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCropRotate from "../../src/components/MdiCropRotate.vue";

test("MdiCropRotate snapshot", () => {
  const wrapper = mount(MdiCropRotate, {});
  expect(wrapper.html()).toMatchSnapshot();
});
