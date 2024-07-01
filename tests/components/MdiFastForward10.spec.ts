
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFastForward10 from "../../src/components/MdiFastForward10.vue";

test("MdiFastForward10 snapshot", () => {
  const wrapper = mount(MdiFastForward10, {});
  expect(wrapper.html()).toMatchSnapshot();
});
