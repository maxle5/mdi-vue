
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLaptopAccount from "../../src/components/MdiLaptopAccount.vue";

test("MdiLaptopAccount snapshot", () => {
  const wrapper = mount(MdiLaptopAccount, {});
  expect(wrapper.html()).toMatchSnapshot();
});
