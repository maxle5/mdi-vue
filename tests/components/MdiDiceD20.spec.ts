
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDiceD20 from "../../src/components/MdiDiceD20.vue";

test("MdiDiceD20 snapshot", () => {
  const wrapper = mount(MdiDiceD20, {});
  expect(wrapper.html()).toMatchSnapshot();
});
