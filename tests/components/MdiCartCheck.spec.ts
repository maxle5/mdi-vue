
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCartCheck from "../../src/components/MdiCartCheck.vue";

test("MdiCartCheck snapshot", () => {
  const wrapper = mount(MdiCartCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
