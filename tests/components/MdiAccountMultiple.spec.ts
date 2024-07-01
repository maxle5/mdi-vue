
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountMultiple from "../../src/components/MdiAccountMultiple.vue";

test("MdiAccountMultiple snapshot", () => {
  const wrapper = mount(MdiAccountMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
