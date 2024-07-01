
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCellphoneKey from "../../src/components/MdiCellphoneKey.vue";

test("MdiCellphoneKey snapshot", () => {
  const wrapper = mount(MdiCellphoneKey, {});
  expect(wrapper.html()).toMatchSnapshot();
});
