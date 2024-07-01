
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLaravel from "../../src/components/MdiLaravel.vue";

test("MdiLaravel snapshot", () => {
  const wrapper = mount(MdiLaravel, {});
  expect(wrapper.html()).toMatchSnapshot();
});
