
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBagPersonalTag from "../../src/components/MdiBagPersonalTag.vue";

test("MdiBagPersonalTag snapshot", () => {
  const wrapper = mount(MdiBagPersonalTag, {});
  expect(wrapper.html()).toMatchSnapshot();
});
