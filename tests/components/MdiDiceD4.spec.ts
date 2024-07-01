
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDiceD4 from "../../src/components/MdiDiceD4.vue";

test("MdiDiceD4 snapshot", () => {
  const wrapper = mount(MdiDiceD4, {});
  expect(wrapper.html()).toMatchSnapshot();
});
