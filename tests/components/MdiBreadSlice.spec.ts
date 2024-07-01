
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBreadSlice from "../../src/components/MdiBreadSlice.vue";

test("MdiBreadSlice snapshot", () => {
  const wrapper = mount(MdiBreadSlice, {});
  expect(wrapper.html()).toMatchSnapshot();
});
