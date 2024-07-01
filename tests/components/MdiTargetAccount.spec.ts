
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTargetAccount from "../../src/components/MdiTargetAccount.vue";

test("MdiTargetAccount snapshot", () => {
  const wrapper = mount(MdiTargetAccount, {});
  expect(wrapper.html()).toMatchSnapshot();
});
