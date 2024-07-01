
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiOrderBoolAscending from "../../src/components/MdiOrderBoolAscending.vue";

test("MdiOrderBoolAscending snapshot", () => {
  const wrapper = mount(MdiOrderBoolAscending, {});
  expect(wrapper.html()).toMatchSnapshot();
});
