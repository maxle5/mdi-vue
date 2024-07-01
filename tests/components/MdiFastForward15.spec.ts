
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFastForward15 from "../../src/components/MdiFastForward15.vue";

test("MdiFastForward15 snapshot", () => {
  const wrapper = mount(MdiFastForward15, {});
  expect(wrapper.html()).toMatchSnapshot();
});
