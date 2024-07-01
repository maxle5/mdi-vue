
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBowArrow from "../../src/components/MdiBowArrow.vue";

test("MdiBowArrow snapshot", () => {
  const wrapper = mount(MdiBowArrow, {});
  expect(wrapper.html()).toMatchSnapshot();
});
