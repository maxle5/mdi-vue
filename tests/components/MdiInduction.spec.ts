
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInduction from "../../src/components/MdiInduction.vue";

test("MdiInduction snapshot", () => {
  const wrapper = mount(MdiInduction, {});
  expect(wrapper.html()).toMatchSnapshot();
});
