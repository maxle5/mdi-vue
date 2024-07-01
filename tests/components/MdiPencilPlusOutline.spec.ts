
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPencilPlusOutline from "../../src/components/MdiPencilPlusOutline.vue";

test("MdiPencilPlusOutline snapshot", () => {
  const wrapper = mount(MdiPencilPlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
