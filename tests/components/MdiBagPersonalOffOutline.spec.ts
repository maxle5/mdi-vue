
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBagPersonalOffOutline from "../../src/components/MdiBagPersonalOffOutline.vue";

test("MdiBagPersonalOffOutline snapshot", () => {
  const wrapper = mount(MdiBagPersonalOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
