
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTank from "../../src/components/MdiTank.vue";

test("MdiTank snapshot", () => {
  const wrapper = mount(MdiTank, {});
  expect(wrapper.html()).toMatchSnapshot();
});
