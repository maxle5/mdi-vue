
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSelectMultiple from "../../src/components/MdiSelectMultiple.vue";

test("MdiSelectMultiple snapshot", () => {
  const wrapper = mount(MdiSelectMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
