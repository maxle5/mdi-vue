
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFaceManOutline from "../../src/components/MdiFaceManOutline.vue";

test("MdiFaceManOutline snapshot", () => {
  const wrapper = mount(MdiFaceManOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
