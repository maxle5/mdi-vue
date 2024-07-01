
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTrayArrowUp from "../../src/components/MdiTrayArrowUp.vue";

test("MdiTrayArrowUp snapshot", () => {
  const wrapper = mount(MdiTrayArrowUp, {});
  expect(wrapper.html()).toMatchSnapshot();
});
