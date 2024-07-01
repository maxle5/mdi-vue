
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBellOff from "../../src/components/MdiBellOff.vue";

test("MdiBellOff snapshot", () => {
  const wrapper = mount(MdiBellOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
