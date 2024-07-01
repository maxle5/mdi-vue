
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFastForwardOutline from "../../src/components/MdiFastForwardOutline.vue";

test("MdiFastForwardOutline snapshot", () => {
  const wrapper = mount(MdiFastForwardOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
