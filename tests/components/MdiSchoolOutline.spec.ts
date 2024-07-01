
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSchoolOutline from "../../src/components/MdiSchoolOutline.vue";

test("MdiSchoolOutline snapshot", () => {
  const wrapper = mount(MdiSchoolOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
