
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPowershell from "../../src/components/MdiPowershell.vue";

test("MdiPowershell snapshot", () => {
  const wrapper = mount(MdiPowershell, {});
  expect(wrapper.html()).toMatchSnapshot();
});
