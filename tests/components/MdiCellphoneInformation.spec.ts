
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCellphoneInformation from "../../src/components/MdiCellphoneInformation.vue";

test("MdiCellphoneInformation snapshot", () => {
  const wrapper = mount(MdiCellphoneInformation, {});
  expect(wrapper.html()).toMatchSnapshot();
});
