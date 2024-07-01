
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDiceD6 from "../../src/components/MdiDiceD6.vue";

test("MdiDiceD6 snapshot", () => {
  const wrapper = mount(MdiDiceD6, {});
  expect(wrapper.html()).toMatchSnapshot();
});
