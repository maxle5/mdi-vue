
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCheckerboardRemove from "../../src/components/MdiCheckerboardRemove.vue";

test("MdiCheckerboardRemove snapshot", () => {
  const wrapper = mount(MdiCheckerboardRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
