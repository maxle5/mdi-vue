
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEmailMinus from "../../src/components/MdiEmailMinus.vue";

test("MdiEmailMinus snapshot", () => {
  const wrapper = mount(MdiEmailMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
