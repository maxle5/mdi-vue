
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBagPersonalTagOutline from "../../src/components/MdiBagPersonalTagOutline.vue";

test("MdiBagPersonalTagOutline snapshot", () => {
  const wrapper = mount(MdiBagPersonalTagOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
