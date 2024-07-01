
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiArrowCollapseRight from "../../src/components/MdiArrowCollapseRight.vue";

test("MdiArrowCollapseRight snapshot", () => {
  const wrapper = mount(MdiArrowCollapseRight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
