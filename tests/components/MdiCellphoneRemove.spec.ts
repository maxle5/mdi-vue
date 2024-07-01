
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCellphoneRemove from "../../src/components/MdiCellphoneRemove.vue";

test("MdiCellphoneRemove snapshot", () => {
  const wrapper = mount(MdiCellphoneRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
