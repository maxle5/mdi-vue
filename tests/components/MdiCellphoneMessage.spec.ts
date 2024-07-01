
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCellphoneMessage from "../../src/components/MdiCellphoneMessage.vue";

test("MdiCellphoneMessage snapshot", () => {
  const wrapper = mount(MdiCellphoneMessage, {});
  expect(wrapper.html()).toMatchSnapshot();
});
