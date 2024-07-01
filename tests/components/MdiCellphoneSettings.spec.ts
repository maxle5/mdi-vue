
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCellphoneSettings from "../../src/components/MdiCellphoneSettings.vue";

test("MdiCellphoneSettings snapshot", () => {
  const wrapper = mount(MdiCellphoneSettings, {});
  expect(wrapper.html()).toMatchSnapshot();
});
