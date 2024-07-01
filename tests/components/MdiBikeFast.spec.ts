
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBikeFast from "../../src/components/MdiBikeFast.vue";

test("MdiBikeFast snapshot", () => {
  const wrapper = mount(MdiBikeFast, {});
  expect(wrapper.html()).toMatchSnapshot();
});
