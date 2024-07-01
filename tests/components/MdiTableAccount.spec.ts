
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTableAccount from "../../src/components/MdiTableAccount.vue";

test("MdiTableAccount snapshot", () => {
  const wrapper = mount(MdiTableAccount, {});
  expect(wrapper.html()).toMatchSnapshot();
});
