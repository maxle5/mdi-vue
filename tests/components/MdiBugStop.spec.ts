
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBugStop from "../../src/components/MdiBugStop.vue";

test("MdiBugStop snapshot", () => {
  const wrapper = mount(MdiBugStop, {});
  expect(wrapper.html()).toMatchSnapshot();
});
