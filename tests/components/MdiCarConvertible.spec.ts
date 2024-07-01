
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCarConvertible from "../../src/components/MdiCarConvertible.vue";

test("MdiCarConvertible snapshot", () => {
  const wrapper = mount(MdiCarConvertible, {});
  expect(wrapper.html()).toMatchSnapshot();
});
