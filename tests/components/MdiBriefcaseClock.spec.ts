
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBriefcaseClock from "../../src/components/MdiBriefcaseClock.vue";

test("MdiBriefcaseClock snapshot", () => {
  const wrapper = mount(MdiBriefcaseClock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
