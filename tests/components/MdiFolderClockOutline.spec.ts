
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFolderClockOutline from "../../src/components/MdiFolderClockOutline.vue";

test("MdiFolderClockOutline snapshot", () => {
  const wrapper = mount(MdiFolderClockOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
