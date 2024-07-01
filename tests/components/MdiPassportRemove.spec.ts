
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPassportRemove from "../../src/components/MdiPassportRemove.vue";

test("MdiPassportRemove snapshot", () => {
  const wrapper = mount(MdiPassportRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
