
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCellphoneText from "../../src/components/MdiCellphoneText.vue";

test("MdiCellphoneText snapshot", () => {
  const wrapper = mount(MdiCellphoneText, {});
  expect(wrapper.html()).toMatchSnapshot();
});
