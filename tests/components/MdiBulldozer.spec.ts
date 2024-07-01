
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBulldozer from "../../src/components/MdiBulldozer.vue";

test("MdiBulldozer snapshot", () => {
  const wrapper = mount(MdiBulldozer, {});
  expect(wrapper.html()).toMatchSnapshot();
});
