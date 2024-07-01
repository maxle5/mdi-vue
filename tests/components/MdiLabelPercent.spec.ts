
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLabelPercent from "../../src/components/MdiLabelPercent.vue";

test("MdiLabelPercent snapshot", () => {
  const wrapper = mount(MdiLabelPercent, {});
  expect(wrapper.html()).toMatchSnapshot();
});
