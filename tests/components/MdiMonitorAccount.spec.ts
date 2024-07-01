
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMonitorAccount from "../../src/components/MdiMonitorAccount.vue";

test("MdiMonitorAccount snapshot", () => {
  const wrapper = mount(MdiMonitorAccount, {});
  expect(wrapper.html()).toMatchSnapshot();
});
