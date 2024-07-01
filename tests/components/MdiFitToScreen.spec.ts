
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFitToScreen from "../../src/components/MdiFitToScreen.vue";

test("MdiFitToScreen snapshot", () => {
  const wrapper = mount(MdiFitToScreen, {});
  expect(wrapper.html()).toMatchSnapshot();
});
