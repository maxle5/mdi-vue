
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBugPlayOutline from "../../src/components/MdiBugPlayOutline.vue";

test("MdiBugPlayOutline snapshot", () => {
  const wrapper = mount(MdiBugPlayOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
