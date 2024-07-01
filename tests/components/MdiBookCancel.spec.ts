
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookCancel from "../../src/components/MdiBookCancel.vue";

test("MdiBookCancel snapshot", () => {
  const wrapper = mount(MdiBookCancel, {});
  expect(wrapper.html()).toMatchSnapshot();
});
