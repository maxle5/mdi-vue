
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileCancel from "../../src/components/MdiFileCancel.vue";

test("MdiFileCancel snapshot", () => {
  const wrapper = mount(MdiFileCancel, {});
  expect(wrapper.html()).toMatchSnapshot();
});
