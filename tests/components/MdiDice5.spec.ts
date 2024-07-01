
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDice5 from "../../src/components/MdiDice5.vue";

test("MdiDice5 snapshot", () => {
  const wrapper = mount(MdiDice5, {});
  expect(wrapper.html()).toMatchSnapshot();
});
