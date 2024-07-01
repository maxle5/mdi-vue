
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookEducationOutline from "../../src/components/MdiBookEducationOutline.vue";

test("MdiBookEducationOutline snapshot", () => {
  const wrapper = mount(MdiBookEducationOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
