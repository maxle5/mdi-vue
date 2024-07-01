
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGreaterThan from "../../src/components/MdiGreaterThan.vue";

test("MdiGreaterThan snapshot", () => {
  const wrapper = mount(MdiGreaterThan, {});
  expect(wrapper.html()).toMatchSnapshot();
});
