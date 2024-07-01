
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTextAccount from "../../src/components/MdiTextAccount.vue";

test("MdiTextAccount snapshot", () => {
  const wrapper = mount(MdiTextAccount, {});
  expect(wrapper.html()).toMatchSnapshot();
});
