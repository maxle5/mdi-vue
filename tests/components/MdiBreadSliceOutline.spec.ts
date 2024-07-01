
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBreadSliceOutline from "../../src/components/MdiBreadSliceOutline.vue";

test("MdiBreadSliceOutline snapshot", () => {
  const wrapper = mount(MdiBreadSliceOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
