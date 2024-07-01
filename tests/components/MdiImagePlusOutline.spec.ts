
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiImagePlusOutline from "../../src/components/MdiImagePlusOutline.vue";

test("MdiImagePlusOutline snapshot", () => {
  const wrapper = mount(MdiImagePlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
