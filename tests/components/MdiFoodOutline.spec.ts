
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFoodOutline from "../../src/components/MdiFoodOutline.vue";

test("MdiFoodOutline snapshot", () => {
  const wrapper = mount(MdiFoodOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
