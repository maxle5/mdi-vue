
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPiggyBank from "../../src/components/MdiPiggyBank.vue";

test("MdiPiggyBank snapshot", () => {
  const wrapper = mount(MdiPiggyBank, {});
  expect(wrapper.html()).toMatchSnapshot();
});
