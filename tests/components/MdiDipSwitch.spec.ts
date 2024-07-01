
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDipSwitch from "../../src/components/MdiDipSwitch.vue";

test("MdiDipSwitch snapshot", () => {
  const wrapper = mount(MdiDipSwitch, {});
  expect(wrapper.html()).toMatchSnapshot();
});
