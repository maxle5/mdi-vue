
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCheese from "../../src/components/MdiCheese.vue";

test("MdiCheese snapshot", () => {
  const wrapper = mount(MdiCheese, {});
  expect(wrapper.html()).toMatchSnapshot();
});
