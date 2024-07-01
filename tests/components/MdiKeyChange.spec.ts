
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiKeyChange from "../../src/components/MdiKeyChange.vue";

test("MdiKeyChange snapshot", () => {
  const wrapper = mount(MdiKeyChange, {});
  expect(wrapper.html()).toMatchSnapshot();
});
