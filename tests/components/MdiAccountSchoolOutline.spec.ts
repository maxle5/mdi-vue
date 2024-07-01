
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountSchoolOutline from "../../src/components/MdiAccountSchoolOutline.vue";

test("MdiAccountSchoolOutline snapshot", () => {
  const wrapper = mount(MdiAccountSchoolOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
