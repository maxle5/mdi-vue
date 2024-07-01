
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBacteriaOutline from "../../src/components/MdiBacteriaOutline.vue";

test("MdiBacteriaOutline snapshot", () => {
  const wrapper = mount(MdiBacteriaOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
