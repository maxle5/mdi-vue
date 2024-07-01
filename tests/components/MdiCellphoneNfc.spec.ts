
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCellphoneNfc from "../../src/components/MdiCellphoneNfc.vue";

test("MdiCellphoneNfc snapshot", () => {
  const wrapper = mount(MdiCellphoneNfc, {});
  expect(wrapper.html()).toMatchSnapshot();
});
