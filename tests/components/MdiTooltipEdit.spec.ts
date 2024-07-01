
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTooltipEdit from "../../src/components/MdiTooltipEdit.vue";

test("MdiTooltipEdit snapshot", () => {
  const wrapper = mount(MdiTooltipEdit, {});
  expect(wrapper.html()).toMatchSnapshot();
});
