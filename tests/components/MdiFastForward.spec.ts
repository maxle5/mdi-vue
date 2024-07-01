
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFastForward from "../../src/components/MdiFastForward.vue";

test("MdiFastForward snapshot", () => {
  const wrapper = mount(MdiFastForward, {});
  expect(wrapper.html()).toMatchSnapshot();
});
