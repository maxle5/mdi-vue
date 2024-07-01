
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTableRemove from "../../src/components/MdiTableRemove.vue";

test("MdiTableRemove snapshot", () => {
  const wrapper = mount(MdiTableRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
