
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBiohazard from "../../src/components/MdiBiohazard.vue";

test("MdiBiohazard snapshot", () => {
  const wrapper = mount(MdiBiohazard, {});
  expect(wrapper.html()).toMatchSnapshot();
});
