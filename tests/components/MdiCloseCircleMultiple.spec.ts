
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCloseCircleMultiple from "../../src/components/MdiCloseCircleMultiple.vue";

test("MdiCloseCircleMultiple snapshot", () => {
  const wrapper = mount(MdiCloseCircleMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
