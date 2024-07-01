
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTrayArrowDown from "../../src/components/MdiTrayArrowDown.vue";

test("MdiTrayArrowDown snapshot", () => {
  const wrapper = mount(MdiTrayArrowDown, {});
  expect(wrapper.html()).toMatchSnapshot();
});
