
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCashFast from "../../src/components/MdiCashFast.vue";

test("MdiCashFast snapshot", () => {
  const wrapper = mount(MdiCashFast, {});
  expect(wrapper.html()).toMatchSnapshot();
});
