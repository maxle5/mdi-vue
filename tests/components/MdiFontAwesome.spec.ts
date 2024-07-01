
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFontAwesome from "../../src/components/MdiFontAwesome.vue";

test("MdiFontAwesome snapshot", () => {
  const wrapper = mount(MdiFontAwesome, {});
  expect(wrapper.html()).toMatchSnapshot();
});
