
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBriefcaseClockOutline from "../../src/components/MdiBriefcaseClockOutline.vue";

test("MdiBriefcaseClockOutline snapshot", () => {
  const wrapper = mount(MdiBriefcaseClockOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
