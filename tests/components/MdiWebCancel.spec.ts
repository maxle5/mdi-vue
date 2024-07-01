
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWebCancel from "../../src/components/MdiWebCancel.vue";

test("MdiWebCancel snapshot", () => {
  const wrapper = mount(MdiWebCancel, {});
  expect(wrapper.html()).toMatchSnapshot();
});
