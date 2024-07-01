
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDiceD10 from "../../src/components/MdiDiceD10.vue";

test("MdiDiceD10 snapshot", () => {
  const wrapper = mount(MdiDiceD10, {});
  expect(wrapper.html()).toMatchSnapshot();
});
