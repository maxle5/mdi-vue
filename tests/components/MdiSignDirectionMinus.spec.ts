
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSignDirectionMinus from "../../src/components/MdiSignDirectionMinus.vue";

test("MdiSignDirectionMinus snapshot", () => {
  const wrapper = mount(MdiSignDirectionMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
