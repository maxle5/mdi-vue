
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTableCancel from "../../src/components/MdiTableCancel.vue";

test("MdiTableCancel snapshot", () => {
  const wrapper = mount(MdiTableCancel, {});
  expect(wrapper.html()).toMatchSnapshot();
});
