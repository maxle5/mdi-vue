
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLabelVariant from "../../src/components/MdiLabelVariant.vue";

test("MdiLabelVariant snapshot", () => {
  const wrapper = mount(MdiLabelVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
