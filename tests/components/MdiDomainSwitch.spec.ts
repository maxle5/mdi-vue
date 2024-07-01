
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDomainSwitch from "../../src/components/MdiDomainSwitch.vue";

test("MdiDomainSwitch snapshot", () => {
  const wrapper = mount(MdiDomainSwitch, {});
  expect(wrapper.html()).toMatchSnapshot();
});
