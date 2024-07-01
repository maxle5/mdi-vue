
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGavel from "../../src/components/MdiGavel.vue";

test("MdiGavel snapshot", () => {
  const wrapper = mount(MdiGavel, {});
  expect(wrapper.html()).toMatchSnapshot();
});
