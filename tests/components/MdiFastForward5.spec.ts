
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFastForward5 from "../../src/components/MdiFastForward5.vue";

test("MdiFastForward5 snapshot", () => {
  const wrapper = mount(MdiFastForward5, {});
  expect(wrapper.html()).toMatchSnapshot();
});
