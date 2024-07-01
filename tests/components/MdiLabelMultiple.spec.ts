
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLabelMultiple from "../../src/components/MdiLabelMultiple.vue";

test("MdiLabelMultiple snapshot", () => {
  const wrapper = mount(MdiLabelMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
