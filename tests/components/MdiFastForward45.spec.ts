
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFastForward45 from "../../src/components/MdiFastForward45.vue";

test("MdiFastForward45 snapshot", () => {
  const wrapper = mount(MdiFastForward45, {});
  expect(wrapper.html()).toMatchSnapshot();
});
