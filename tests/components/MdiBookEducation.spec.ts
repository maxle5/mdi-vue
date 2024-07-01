
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookEducation from "../../src/components/MdiBookEducation.vue";

test("MdiBookEducation snapshot", () => {
  const wrapper = mount(MdiBookEducation, {});
  expect(wrapper.html()).toMatchSnapshot();
});
