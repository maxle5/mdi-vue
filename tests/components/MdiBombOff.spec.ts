
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBombOff from "../../src/components/MdiBombOff.vue";

test("MdiBombOff snapshot", () => {
  const wrapper = mount(MdiBombOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
