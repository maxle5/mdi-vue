
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBellPlusOutline from "../../src/components/MdiBellPlusOutline.vue";

test("MdiBellPlusOutline snapshot", () => {
  const wrapper = mount(MdiBellPlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
