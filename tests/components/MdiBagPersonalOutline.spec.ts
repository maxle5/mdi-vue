
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBagPersonalOutline from "../../src/components/MdiBagPersonalOutline.vue";

test("MdiBagPersonalOutline snapshot", () => {
  const wrapper = mount(MdiBagPersonalOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
