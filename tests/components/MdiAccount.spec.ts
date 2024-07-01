
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccount from "../../src/components/MdiAccount.vue";

test("MdiAccount snapshot", () => {
  const wrapper = mount(MdiAccount, {});
  expect(wrapper.html()).toMatchSnapshot();
});
