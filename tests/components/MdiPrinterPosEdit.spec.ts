
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPrinterPosEdit from "../../src/components/MdiPrinterPosEdit.vue";

test("MdiPrinterPosEdit snapshot", () => {
  const wrapper = mount(MdiPrinterPosEdit, {});
  expect(wrapper.html()).toMatchSnapshot();
});
