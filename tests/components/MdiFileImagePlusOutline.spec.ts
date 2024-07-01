
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileImagePlusOutline from "../../src/components/MdiFileImagePlusOutline.vue";

test("MdiFileImagePlusOutline snapshot", () => {
  const wrapper = mount(MdiFileImagePlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
