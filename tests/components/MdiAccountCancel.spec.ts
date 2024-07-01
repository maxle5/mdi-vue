
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountCancel from "../../src/components/MdiAccountCancel.vue";

test("MdiAccountCancel snapshot", () => {
  const wrapper = mount(MdiAccountCancel, {});
  expect(wrapper.html()).toMatchSnapshot();
});
