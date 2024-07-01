
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPassportCancel from "../../src/components/MdiPassportCancel.vue";

test("MdiPassportCancel snapshot", () => {
  const wrapper = mount(MdiPassportCancel, {});
  expect(wrapper.html()).toMatchSnapshot();
});
