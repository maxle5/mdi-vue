
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiOilLevel from "../../src/components/MdiOilLevel.vue";

test("MdiOilLevel snapshot", () => {
  const wrapper = mount(MdiOilLevel, {});
  expect(wrapper.html()).toMatchSnapshot();
});
