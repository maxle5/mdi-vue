
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFastForward60 from "../../src/components/MdiFastForward60.vue";

test("MdiFastForward60 snapshot", () => {
  const wrapper = mount(MdiFastForward60, {});
  expect(wrapper.html()).toMatchSnapshot();
});
