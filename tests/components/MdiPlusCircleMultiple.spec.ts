
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPlusCircleMultiple from "../../src/components/MdiPlusCircleMultiple.vue";

test("MdiPlusCircleMultiple snapshot", () => {
  const wrapper = mount(MdiPlusCircleMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
