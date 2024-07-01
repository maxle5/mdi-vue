
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDiceD12 from "../../src/components/MdiDiceD12.vue";

test("MdiDiceD12 snapshot", () => {
  const wrapper = mount(MdiDiceD12, {});
  expect(wrapper.html()).toMatchSnapshot();
});
