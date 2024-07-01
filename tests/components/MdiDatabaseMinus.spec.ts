
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDatabaseMinus from "../../src/components/MdiDatabaseMinus.vue";

test("MdiDatabaseMinus snapshot", () => {
  const wrapper = mount(MdiDatabaseMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
