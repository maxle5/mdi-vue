
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFinance from "../../src/components/MdiFinance.vue";

test("MdiFinance snapshot", () => {
  const wrapper = mount(MdiFinance, {});
  expect(wrapper.html()).toMatchSnapshot();
});
