
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFoodOffOutline from "../../src/components/MdiFoodOffOutline.vue";

test("MdiFoodOffOutline snapshot", () => {
  const wrapper = mount(MdiFoodOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
