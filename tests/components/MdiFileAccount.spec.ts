
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileAccount from "../../src/components/MdiFileAccount.vue";

test("MdiFileAccount snapshot", () => {
  const wrapper = mount(MdiFileAccount, {});
  expect(wrapper.html()).toMatchSnapshot();
});
