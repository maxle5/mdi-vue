
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCancel from "../../src/components/MdiCancel.vue";

test("MdiCancel snapshot", () => {
  const wrapper = mount(MdiCancel, {});
  expect(wrapper.html()).toMatchSnapshot();
});
