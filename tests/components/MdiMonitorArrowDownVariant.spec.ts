
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMonitorArrowDownVariant from "../../src/components/MdiMonitorArrowDownVariant.vue";

test("MdiMonitorArrowDownVariant snapshot", () => {
  const wrapper = mount(MdiMonitorArrowDownVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
