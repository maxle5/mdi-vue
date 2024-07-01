
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVideoAccount from "../../src/components/MdiVideoAccount.vue";

test("MdiVideoAccount snapshot", () => {
  const wrapper = mount(MdiVideoAccount, {});
  expect(wrapper.html()).toMatchSnapshot();
});
