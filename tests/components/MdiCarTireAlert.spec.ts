
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCarTireAlert from "../../src/components/MdiCarTireAlert.vue";

test("MdiCarTireAlert snapshot", () => {
  const wrapper = mount(MdiCarTireAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
