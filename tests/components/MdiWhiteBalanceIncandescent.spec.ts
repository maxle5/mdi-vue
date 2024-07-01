
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWhiteBalanceIncandescent from "../../src/components/MdiWhiteBalanceIncandescent.vue";

test("MdiWhiteBalanceIncandescent snapshot", () => {
  const wrapper = mount(MdiWhiteBalanceIncandescent, {});
  expect(wrapper.html()).toMatchSnapshot();
});
