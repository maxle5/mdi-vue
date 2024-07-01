
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookAccount from "../../src/components/MdiBookAccount.vue";

test("MdiBookAccount snapshot", () => {
  const wrapper = mount(MdiBookAccount, {});
  expect(wrapper.html()).toMatchSnapshot();
});
