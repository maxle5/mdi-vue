
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiOrderNumericAscending from "../../src/components/MdiOrderNumericAscending.vue";

test("MdiOrderNumericAscending snapshot", () => {
  const wrapper = mount(MdiOrderNumericAscending, {});
  expect(wrapper.html()).toMatchSnapshot();
});
