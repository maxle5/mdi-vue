
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBriefcasePlus from "../../src/components/MdiBriefcasePlus.vue";

test("MdiBriefcasePlus snapshot", () => {
  const wrapper = mount(MdiBriefcasePlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
