
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCellphoneCharging from "../../src/components/MdiCellphoneCharging.vue";

test("MdiCellphoneCharging snapshot", () => {
  const wrapper = mount(MdiCellphoneCharging, {});
  expect(wrapper.html()).toMatchSnapshot();
});
