
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDiceD8 from "../../src/components/MdiDiceD8.vue";

test("MdiDiceD8 snapshot", () => {
  const wrapper = mount(MdiDiceD8, {});
  expect(wrapper.html()).toMatchSnapshot();
});
