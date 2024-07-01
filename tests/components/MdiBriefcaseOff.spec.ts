
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBriefcaseOff from "../../src/components/MdiBriefcaseOff.vue";

test("MdiBriefcaseOff snapshot", () => {
  const wrapper = mount(MdiBriefcaseOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
