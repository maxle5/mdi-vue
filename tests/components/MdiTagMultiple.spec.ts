
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTagMultiple from "../../src/components/MdiTagMultiple.vue";

test("MdiTagMultiple snapshot", () => {
  const wrapper = mount(MdiTagMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
