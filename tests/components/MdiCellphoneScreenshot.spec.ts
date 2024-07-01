
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCellphoneScreenshot from "../../src/components/MdiCellphoneScreenshot.vue";

test("MdiCellphoneScreenshot snapshot", () => {
  const wrapper = mount(MdiCellphoneScreenshot, {});
  expect(wrapper.html()).toMatchSnapshot();
});
