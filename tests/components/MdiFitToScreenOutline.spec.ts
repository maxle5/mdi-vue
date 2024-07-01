
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFitToScreenOutline from "../../src/components/MdiFitToScreenOutline.vue";

test("MdiFitToScreenOutline snapshot", () => {
  const wrapper = mount(MdiFitToScreenOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
