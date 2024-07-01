
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWhiteBalanceIridescent from "../../src/components/MdiWhiteBalanceIridescent.vue";

test("MdiWhiteBalanceIridescent snapshot", () => {
  const wrapper = mount(MdiWhiteBalanceIridescent, {});
  expect(wrapper.html()).toMatchSnapshot();
});
